import React from 'react';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
