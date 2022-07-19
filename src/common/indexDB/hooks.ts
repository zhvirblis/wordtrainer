import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dbState } from "./atom";
import { newConn } from "./service";
import { DBStatus } from "./types";

export interface useIndexDBOptions {
    update: boolean
}
const useIndexDB = (options: useIndexDBOptions = { update: false }) => {
    const [db, setDB] = useRecoilState(dbState);
    useEffect(() => {
        if (options?.update) {
            setDB({ status: DBStatus.Loading });
            newConn().then(() => {
                setDB({ status: DBStatus.Done })
            }).catch((err) => {
                setDB({ status: DBStatus.Failed, error: err });
            });       
        }
    }, [])
    return db;
}

export default useIndexDB;