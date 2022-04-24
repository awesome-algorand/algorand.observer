import './Home.scss';
import React from "react";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import Search from '../Search/Search';
import {Grid} from "@mui/material";

function Home(): JSX.Element {
    return (<div className={"home-wrapper"}>
        <div className={"home-container"}>
            <div className="home-body">
                <DeveloperBoardIcon className="logo"></DeveloperBoardIcon>
                <div className="tag-line">
                    Algorand Private Blockchain Explorer
                </div>
                <div className="search-section">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Search></Search>
                        </Grid>
                    </Grid>

                </div>
            </div>
        </div>
    </div>);
}

export default Home;
