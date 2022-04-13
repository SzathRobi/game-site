import PostCard from "../../comps/news/PostCard";
import { getPosts } from "../../services";
import styles from "../../styles/news.module.scss";

export default function News({ posts }) {
  return (
    <div className={styles.News}>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
