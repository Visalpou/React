const BlogList = ({blog,title,handleDelete}) => {
    
    return ( 
        <div>
            <h2  align="center">{title}</h2>
            {blog.map( (blogs) => (   
                <div key={blogs.id} align="center">
                    <p  align="center"> {blogs.title} {blogs.body} </p>
                    <button onClick={() => handleDelete(blogs.id) }>Hello</button>    
                </div>                                            
            ) )}    
        </div> 
     );
}
 
export default BlogList;