import {Fragment} from "react";
import PageHeader from "../../components/ui/page-header";
import BlogImage from "../../components/blog-detail/blog-image";
import {useRouter} from "next/router";
import {getAllEvents, getEventById} from "../../data/blog";
import Title from "../../components/ui/title";
import BlogMeta from "../../components/blog-detail/blog-meta";
import BlogContent from "../../components/blog-detail/blog-content";
import Sidebar from "../../components/blog/sidebar";
import CommentForm from "../../components/icons/comment-form";
import Button from "../../components/ui/button";
import RelatedBlog from "../../components/icons/related-blog";
import BlogItem from "../../components/home-page/blog/blog-item";

const BlogDetailPage = () => {

    const router = useRouter();
    const blogId = router.query.blogId;
    const blog = getEventById(blogId);

    const posts = getAllEvents();

    if (!blog) {
        return (
            <Title>
                هیچ مقاله ای یافت نشد!
            </Title>
        )
    }

    const submitHandler = (event) =>{
        event.preventDefault();
    };

    return (
        <Fragment>
            <PageHeader/>
            <section className="blog-detail">
                <Sidebar/>
                <div className="blog-detail_main">
                    <BlogImage
                        title={blog.title}
                        image={blog.image}
                    />
                    <BlogMeta
                        category={blog.category}
                        date={blog.date}
                    />
                    <BlogContent
                        title={blog.title}
                        description={blog.description}
                    />
                    <div className="blog-detail__form">
                        <div className="title">
                            <CommentForm/>
                            <p>
                                ارسال دیدگاه
                            </p>
                        </div>
                        <form>
                            <div id="id-info">

                                <div className="controls">
                                    <label htmlFor="name">
                                        نام
                                    </label>
                                    <input id="name" name="name" type="text"/>
                                </div>

                                <div className="controls">
                                    <label htmlFor="family">
                                        خانوادگی
                                    </label>
                                    <input id="family" name="family" type="text"/>
                                </div>

                            </div>

                            <div className="controls">
                                <label htmlFor="comment">
                                    نظر خود را بنویسید ...
                                </label>
                                <textarea id="comment" name="comment">

                                </textarea>
                            </div>

                            <Button onClick={submitHandler}>
                                ارسال پیام
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
            <div id="related-posts">
                <div className="blog-detail__related">
                    <div className="title">
                        <RelatedBlog/>
                        <p>
                            مطالب مرتبط
                        </p>
                    </div>
                </div>
                <div className="posts-related">
                    {posts.slice(0,4).map((post) => (
                        <BlogItem
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            category={post.category}
                            image={post.image}
                            date={post.date}
                            link={post.link}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default BlogDetailPage;