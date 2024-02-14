import React, { useState, useEffect } from "react";

const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
        );
        const newPosts = await response.json();

        // Ensure unique post IDs
        // const uniqueNewPosts = newPosts.map((post) => ({
        //   ...post,
        //   uniqueID: post.id + Math.random(), // Ensure uniqueness
        // }));
        setPosts((prevPosts) => {
          return [
            ...new Map(
              [...prevPosts, ...newPosts].map((obj) => [obj.id, obj])
            ).values(),
          ];
          // return [...prevPosts, ...newPosts]
        })
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom, load more records
      setPage((prevPage) => prevPage + 1);
    }
  };
  // const handleScroll = () => {
  //   const windowHeight = window.innerHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const documentHeight = document.documentElement.offsetHeight;

  //   // Adjust the percentage value as needed
  //   const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

  //   // Load more records when the user has scrolled to 80% of the page height
  //   if (scrollPercentage >= 0.96) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Infinite Scroll Component</h1>
      {posts.map((post) => (
        <div key={post.id} style={styles.postContainer}>
          <h2 style={styles.postTitle}>{post.id}</h2>
          <h2 style={styles.postTitle}>{post.title}</h2>
          <p style={styles.postBody}>{post.body}</p>
        </div>
      ))}
      {loading && <p style={styles.loading}>Loading...</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  postContainer: {
    marginBottom: "20px",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "5px",
  },
  postTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  postBody: {
    fontSize: "16px",
    color: "#555",
  },
  loading: {
    fontSize: "18px",
    color: "#888",
    textAlign: "center",
  },
};

export default InfiniteScrollComponent;
