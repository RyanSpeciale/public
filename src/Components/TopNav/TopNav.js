import React from 'react';
import { SearchInput, Strong, Text, Avatar, TickCircleIcon, minorScale, majorScale, pane, Button, Heading } from 'evergreen-ui';
import './Styles.css'
import './logo.jpg'

export class TopNav extends React.Component {
    render() {
        return (<div>
                    <h1 className="Header">The EmberSec Blog</h1>
                    <pane display="flex" alignItems="center" height={majorScale(1)} width="100%">
                        <Button marginLeft={majorScale(6)} marginRight={majorScale(2)} marginBottom={minorScale(2)} align="center">Fuzzing</Button>
                        <Button marginLeft={majorScale(2)} marginRight={majorScale(2)} marginBottom={minorScale(2)} align="center">Malware Analysis</Button>
                        <Button marginLeft={majorScale(2)} marginRight={majorScale(2)} marginBottom={minorScale(2)} align="center">Network Security</Button>
                        <Button marginLeft={majorScale(2)} marginRight={majorScale(2)} marginBottom={minorScale(2)} align="center">Programming</Button>
                        <Button marginLeft={majorScale(2)} marginRight={majorScale(2)} marginBottom={minorScale(2)} align="center">Security News</Button>
                        <Button marginRight={majorScale(2)} marginLeft={majorScale(2)} marginBottom={minorScale(2)} align="right">About</Button>
                        <SearchInput marginBottom={minorScale(1)} placeholder="Search for posts.." />
                        <Strong marginLeft={majorScale(5)} size="500">Hello, Ryan!</Strong>
                        <Avatar marginLeft={majorScale(3)} marginBottom={minorScale(4)} isSolid name="Ryan Speciale" size={40} />
                        <TickCircleIcon color="success" marginRight={8} marginLeft={8} />
                    </pane>
                </div>)}};