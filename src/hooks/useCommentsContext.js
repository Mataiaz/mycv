import { CommentsContext } from "../context/CommentContext";
import { useContext } from "react";

export const useCommentsContext = () => {
    const context = useContext(CommentsContext)

    if(!context) {
        throw Error('use context inside context provider')
    }

    return context
}