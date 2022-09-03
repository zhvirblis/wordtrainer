import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot } from "recoil";
import { useModules } from "./hooks";
import { addNewModule, editModule, deleteModule } from "./service";

jest.mock("./service");

function renderUseModules() {
    return renderHook(() => useModules(), {
        wrapper: RecoilRoot
    });
}

it("modules and function for operations(add, edit, remove) exist in return", () => {
    const { result } = renderUseModules();
    expect(result.current.modules).toBeDefined();
    expect(result.current.add).toBeDefined();
    expect(result.current.edit).toBeDefined();
    expect(result.current.remove).toBeDefined();
});

it("check initial modules", () => {
    const { result } = renderUseModules();
    expect(result.current.modules).toEqual([]);
});

it("should add new modules", async () => {
    let id = 0;
    (addNewModule as any).mockResolvedValue(id++);
    const { result, waitForNextUpdate } = renderUseModules();

    const moduleName = "Italian";
    const moduleName2 = "Japanese";

    result.current.add(moduleName);
    await waitForNextUpdate();

    expect(typeof result.current.modules[0].id).toBe("number");
    expect(result.current.modules[0].name).toBe(moduleName);

    (addNewModule as any).mockResolvedValue(id++);

    result.current.add(moduleName2);
    await waitForNextUpdate();

    expect(result.current.modules).toEqual([{
        id: 0,
        name: moduleName,
    }, {
        id: 1,
        name: moduleName2
    }]);
});

it("should edit module", async () => {
    let id = 0;
    (addNewModule as any).mockResolvedValue(id++);
    (editModule as any).mockResolvedValue();

    const { result, waitForNextUpdate } = renderUseModules();

    const moduleName = "Italian";
    const moduleName2 = "Japanese";

    result.current.add(moduleName);
    await waitForNextUpdate();

    (addNewModule as any).mockResolvedValue(id++);

    result.current.add(moduleName2);
    await waitForNextUpdate();

    expect(result.current.modules[0].name).toBe(moduleName);
    expect(result.current.modules[1].name).toBe(moduleName2);

    const moduleId1 = result.current.modules[0].id;
    const moduleId2 = result.current.modules[1].id;

    const module1UpdatedName = "Updated Italian";
    const module2UpdatedName = "Updated Japanese";

    result.current.edit(moduleId1!, module1UpdatedName);
    await waitForNextUpdate();

    result.current.edit(moduleId2!, module2UpdatedName);
    await waitForNextUpdate();

    expect(result.current.modules).toEqual([{
        id: 0,
        name: module1UpdatedName
    }, {
        id: 1,
        name: module2UpdatedName
    }])
});

it("should delete module", async () => {
    let id = 0;
    (addNewModule as any).mockResolvedValue(id++);

    const { result, waitForNextUpdate } = renderUseModules();
    const moduleName = "Italian";
    const moduleName2 = "Japanese";

    result.current.add(moduleName);
    await waitForNextUpdate();

    (addNewModule as any).mockResolvedValue(id++);

    result.current.add(moduleName2);
    await waitForNextUpdate();

    (deleteModule as any).mockResolvedValue();

    result.current.remove(0);
    await waitForNextUpdate()

    expect(result.current.modules).toEqual([{
        id: 1,
        name: moduleName2
    }]);
});

it('should console error if adding is failed', async () => {
    (addNewModule as any).mockRejectedValue("Some err!");
    const log = jest.spyOn(global.console, "log").mockImplementation();
    
    const { result } = renderUseModules();
    result.current.add("Module name");
    await new Promise((resolve) => setTimeout(() => { resolve(true) }, 0));

    expect(log.mock.calls[0][0]).toBe("Some err!");
});

it('should console error if editing is failed', async () => {
    let id = 0;
    (addNewModule as any).mockResolvedValue(id++);
    (editModule as any).mockRejectedValue("Some err!");
    const log = jest.spyOn(global.console, "log").mockImplementation();
    
    const { result, waitForNextUpdate } = renderUseModules();
    result.current.add("Module name");
    await waitForNextUpdate();
    result.current.edit(0, "New Module name");

    await new Promise((resolve) => setTimeout(() => { resolve(true) }, 0));

    expect(log.mock.calls[0][0]).toBe("Some err!");
});