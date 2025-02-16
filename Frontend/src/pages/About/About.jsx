import { Header } from "../../components/Header/Header";
import "./About.css"; // Import the CSS file

export const About = () => {
    return (
        <>
            <Header />
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-title">So, Why Choose a Dating App Like LIITA?</h2>
                    <p className="about-text">Traditional Dating Apps are outdated:</p>
                    <ul className="about-list">
                        <li>They work using an Elo System</li>
                        <li>"Likes" from people with less elo helps (+elo)</li>
                        <li>"Likes" from people with high elo really helps (++elo)</li>
                        <li>"Rejections" from people with more elo hurts (-elo)</li>
                        <li>"Rejections" from people with less elo really hurts (--elo)</li>
                    </ul>

                    <p className="about-subtitle">This is problematic:</p>
                    <ul className="about-list">
                        <li>Even with the most optimistic metrics, people only spend on average 6.26 seconds per person</li>
                        <li>The first thing you are presented with is pictures of the other person, turning Elo into an attractiveness metric</li>
                        <li>Obvious problems: In real life, attractiveness is not a strong predictor of long-term relationship health</li>
                    </ul>

                    <p className="about-subtitle">Most Dating Apps are Predatory because they are designed for maximal user retention.</p>

                    <p className="about-bold">BUT NOT US</p>
                    <p className="about-text">
                        In real life, successful relationships are created by mutual friends who understand how nuances in Personality, Hobbies, and Lifestyles synergistically interact with each other.
                    </p>
                    <p className="about-text">
                        We replicate this same phenomenon using AI acting as our "mutual friend."
                    </p>
                </div>
            </div>
        </>
    );
};
