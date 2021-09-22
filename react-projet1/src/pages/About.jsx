import React, {Fragment} from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <Fragment>
            <div className="about">
                <Navigation />
                <Logo />
                <h1>À propos</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat veniam quidem, dolorem unde optio doloremque tempore minima aliquam reprehenderit. Autem, tempore fugiat! Hic, qui reiciendis odio tempore molestiae quos.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta sequi doloribus consectetur, praesentium, ex sapiente laboriosam natus modi repudiandae omnis maiores ut et, ratione inventore beatae? Nesciunt molestias consectetur sapiente, ab tenetur unde odit ipsum officia perferendis non, corporis modi? Doloribus expedita atque, aliquid sed dignissimos, animi suscipit accusantium nulla consectetur quibusdam ipsa. Officia ea perferendis veritatis numquam cum?</p>
            </div>
        </Fragment>
    );
};
export default About;