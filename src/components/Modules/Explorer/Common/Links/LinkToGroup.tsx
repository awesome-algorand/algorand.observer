import {IconButton, Tooltip} from "@mui/material";
import Link from './Link';
import React from "react";
import { Link as LinkIcon } from 'lucide-react';

function LinkToGroup({id, blockId, icon = false}): JSX.Element {
    return <Link href={"/group/" + encodeURIComponent(id) + '/' + blockId}>{icon ? <Tooltip title="This is one of the group transaction. Click to view all the groups transactions.">
        <IconButton size={"small"}>
            <LinkIcon size={14} />
        </IconButton>
    </Tooltip> : id}</Link>;
}

export default LinkToGroup;
