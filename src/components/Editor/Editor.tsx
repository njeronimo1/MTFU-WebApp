
"use client";


import { Block } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";


interface EditorProps{
    onChangeFn: (e: any) => void,
    initialContent?: string,
    editable?: boolean
} 

export function Editor({onChangeFn, initialContent, editable} : EditorProps) {
    const editor = useCreateBlockNote({
        initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    })
    
    return(
        <BlockNoteView editor={editor} editable={editable} onChange={() => {onChangeFn(JSON.stringify(editor.topLevelBlocks, null, 2))}} theme="dark" />
    )
}