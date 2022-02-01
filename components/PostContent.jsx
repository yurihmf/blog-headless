import React from 'react';
import moment from 'moment';

const PostContent = ({post}) => {
    const postContent = post.posts[0];

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                src={obj.src}
                className="w-full h-auto"
              />
            );
          default:
            return modifiedText;
        }
      };
  return (
      <article className="col-span-12 pt-20 flex flex-col gap-y-4">
          <h1 className="text-white text-4xl font-lexend font-normal leading-snug w-11/12">{postContent.title}</h1>
          <p className="text-white font-inter font-medium leading-snug text-2xl">{postContent.subtitle}</p>
          <span className="text-white font-inter font-normal leading-snug text-lg">{moment(postContent.createdAt).format('DD/MM/YYYY')}</span>
          <div className="relative w-full h-96 p-4 mb-4">
                <img src={postContent.thumb.url} alt={postContent.slug} className="absolute inset-0 z-0 w-full h-full object-cover" />
              <span className="relative z-20 text-md text-white leading-5 font-lexend bg-purple-light px-6 py-1 max-w-max rounded-sm">{postContent.categories.map(category => category.title)}</span>
          </div>
          <div className="w-full flex flex-col gap-y-6 text-white font-inter font-normal leading-snug text-xl">
              {
                  postContent.content.raw.children.map((typeObj, index) => {
                      const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                      return getContentFragment(index, children, typeObj, typeObj.type)
                  })
              }
          </div>
      </article>
  );
};

export default PostContent;
