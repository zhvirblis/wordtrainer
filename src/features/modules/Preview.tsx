import Header from "../../common/page-parts/Header";

export default function ModulePreview({match}: any) {
    return <>
        <Header />
        <div className="container">
            ModuleId {match.params.id}
        </div>
    </>
}
