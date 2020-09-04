import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';
import {
    List, 
    StreamContainer,
    StreamRow,
    StreamTubnail,
    StreamColumn,
    StreamHeader,
    StreamAvatar,
    StreamUsername,
    StreamDescription,
    StreamCategory,
    TagRow,
    TagView,
    TagText
    
 } from './styles';

const StreamList: React.FC = () => {
    const StreamItem = () => (
        <StreamContainer>
            <StreamTubnail source={streamThumbnail}/>

            <StreamColumn>
                <StreamRow>
                    <StreamHeader>
                        <StreamAvatar />
                        <StreamUsername numberOfLines={1}>paulo_sanches</StreamUsername>
                    </StreamHeader>
                    
                    <StreamDescription numberOfLines={1}>
                        Front-end com Angular, React e MongoDB
                    </StreamDescription>

                    <StreamCategory numberOfLines={1}>
                        Science & Technology
                    </StreamCategory>
                </StreamRow>

                <TagRow>
                    <TagView>
                        <TagText>Portuguese</TagText>
                    </TagView>
                    <TagView>
                        <TagText>Web Developer</TagText>
                    </TagView>
                </TagRow>
            </StreamColumn>
        </StreamContainer>
    )
  return (
      <List>
            <StreamItem />
            <StreamItem />
            <StreamItem />
      </List>
  );
}

export default StreamList;