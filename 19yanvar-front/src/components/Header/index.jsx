import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import "./header.scss"
function Header() {
    const data = [
        {
            image: "https://preview.colorlib.com/theme/tasty/images/bg_1.jpg.webp",
            caption: "<h1>Tasty & Delicious Food</h1><button>Book a table</button>"
        },
        {
            image: "https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp",
            caption: "<h1>Book a table for yourself at a time convenient for you</h1><button>Book a table</button>"
        },
        {
            image: "https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp",
            caption: "<h1>Book a table for yourself at a time convenient for you</h1><button>Book a table</button>"
        }
    ]
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    return (
        <div>
            <Carousel
                data={data}
                time={3000}
                width="100vw"
                height="80vh"
                captionStyle={captionStyle}
                captionPosition="center"
                automatic={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "100vw",
                    minHeight: "80vh",
                }}
            />
        </div>
    )
}

export default Header