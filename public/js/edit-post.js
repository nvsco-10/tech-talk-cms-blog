const updatePost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#edit-title').value;
    const content = document.querySelector('#edit-content').value;

    //get post id using window.location
    const pathLength = window.location.pathname.split('/').length;
    const postId = window.location.pathname.split('/')[pathLength - 1];
  
    if (title && content) {
  
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post.');
      }
  
    };
  
  }
    
    document.querySelector('#updatepost').addEventListener('click', updatePost);