import React from 'react';
import PostCardDefinition from './PostCardDescription';

const ContentHome = ({posts}) => {
  return (
        <section className="grid col-span-8 gap-y-8 h-900 overflow-y-auto scrollbar scrollbar-thumb-purple-light scrollbar-track-bg-scroll">
            <div className="flex flex-col gap-y-8">
                <PostCardDefinition posts={posts} />
            </div>
        </section>
    );
};

export default ContentHome;
