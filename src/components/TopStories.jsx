import Carousel from 'react-bootstrap/Carousel';

function TopStories() {
    return (
        <div>
            <h1 className='h1popularsales'>Top Stories</h1>

            <Carousel >

                <Carousel.Item >
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1"
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption className='outercarousel'  >
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1"
                            alt="fourth slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1"
                            alt="fifth slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1"
                            alt="sixth slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg"
                            alt="seventh slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '900px', height: '500px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1"
                            alt="eight slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <div style={{ width: '900px', height: '700px' }}>
                        <img
                            className="d-block w-100 carouselimg"
                            src="https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1"
                            alt="eight slide"
                        />
                    </div>
                    <Carousel.Caption className='outercarousel'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
}

export default TopStories;