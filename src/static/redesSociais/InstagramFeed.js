import './InstagramFeed.css';

const InstagramFeed = () => {
  const posts = [
    {
      url: "https://www.instagram.com/p/DL5KDUOuGZr/",
      image: "/images/instagram/post1.jpg",
      alt: "Look completo D.U"
    },
    {
      url: "https://www.instagram.com/p/DEqTtvlSe2z/",
      image: "/images/instagram/post3.jpg",
      alt: "Detalhes de costura"
    },
    {
      url: "https://www.instagram.com/p/C9lD8JCS77e/",
      image: "/images/instagram/post4.jpg",
      alt: "Novo lançamento"
    },
    {
      url: "https://www.instagram.com/p/DLh8fOQOtof/",
      image: "/images/instagram/post2.jpg",
      alt: "Coleção outono"
    }
  ];

  return (
    <div className='instagram-grid-container'>
      <a
        href="https://www.instagram.com/d.u.br/"
        target="_blank"
        rel="noopener noreferrer"
        className='instagram-profile-link'
      >
        <h3 className='instagram-grid-title'>D.U no Insta</h3>
      </a>
      
      <div className='instagram-row'>
        {posts.slice(0, 2).map((post, index) => (
          <InstagramPost key={`top-${index}`} post={post} />
        ))}
      </div>
      
      <div className='instagram-row'>
        {posts.slice(2, 4).map((post, index) => (
          <InstagramPost key={`bottom-${index}`} post={post} />
        ))}
      </div>
    </div>
  );
};

const InstagramPost = ({ post }) => (
  <a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    className='instagram-grid-post'
    aria-label={`Post: ${post.alt}`}
  >
    <img src={post.image} alt={post.alt} className='post-image' />
    <div className='post-overlay'>
      <span className='hover-message'>Ver no Instagram</span>
    </div>
  </a>
);

export default InstagramFeed;