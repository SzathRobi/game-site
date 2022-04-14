import React from "react";
import Image from "next/image";
import { getPosts, getPostDetails } from "../../services/index";
import styles from "../../styles/postDetails.module.scss";
import Header from "../../comps/header/Header";
/*import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from '../../components'
*/
function PostDetails({ post }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-CA");
  };

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className={styles.h3}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className={styles.p}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className={styles.h4}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className={styles.image}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <section className={styles.PostDetailsPage}>
      <Header page="news" />
      <div className={styles.PostDetails}>
        <div className={styles.imageContainer}>
          <img src={post.featuredImage.url} layout="fill" alt="image" />
        </div>

        <div className={styles.subInfoContainer}>
          <div className={styles.authorContainer}>
            <img
              alt={post.author.name}
              height={30}
              width={30}
              src={post.author.photo.url}
            />
            <p className={styles.authorName}>{post.author.name}</p>
          </div>
          <div className={styles.dateContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">{formatDate(post.createdAt)}</span>
          </div>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const post = await getPosts();

  return {
    paths: post.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetails;
