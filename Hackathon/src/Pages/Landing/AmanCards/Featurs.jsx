import React from 'react';
import './Feature.css'; // Make sure the CSS file is in the same directory or adjust the path accordingly

const HeroSection = () => {
    return (
        <section className="aman-hero-section">
            <h1 className="aman-hero-title">
                Unite, Learn, and Innovate with Student Resources from Every University
            </h1>
            <p className="aman-hero-description">
                Empowering students through shared resources, fostering collaboration, and building a community of knowledge across universities for a richer academic experience.
            </p>
            
            <div className="aman-cards-container">
                <div className="aman-card">
                    <h2>Explore Inspiring Student Projects</h2>
                    <p>View innovative projects across universities, from engineering marvels to groundbreaking research.</p>
                </div>
                
                <div className="aman-card">
                    <h2>Ace Exams with Past Papers</h2>
                    <p>Prepare for exams with past papers, gain insights into question patterns, and boost your confidence in studies.</p>
                </div>
                
                <div className="aman-card">
                    <h2>Study with Shared Notes</h2>
                    <p>Enhance your learning with shared notes, simplify complex topics, and quickly review essential concepts for exams.</p>
                </div>
                
                <div className="aman-card">
                    <h2>Share Your Projects and Ideas</h2>
                    <p>Upload your projects and research, showcase your hard work, and gain recognition across universities.</p>
                </div>
                
                <div className="aman-card">
                    <h2>Join a Nationwide Learning Network</h2>
                    <p>Connect with students across India, discuss ideas, collaborate on projects, and expand your network.</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
