import "./About.css"

export default function About() {
    return (
        <>
            <div className="about">
                <span className="tag">&lt;body&gt;</span><br />
                <span className="tag">&lt;h1&gt;</span>
                <h1>About Me</h1>
                <span className="tag">&lt;h1&gt;</span><br />
                <span className="tag" style={{marginLeft : "20px"}}>&lt;p class="About-Me"&gt;</span><br />

                <p>
                Hello there! I'm <strong>Srinivas Mathivanan</strong>, an enthusiastic aspiring software developer with a profound love for coding and a competitive edge. I'm pursuing my <strong>B.tech Information Technology</strong> at <strong>SASTRA University</strong>.I'm looking for a role in established IT company and opportunity to work in the latest technologies on challenging and diverse projects.<br /><br />
                I love coding and I regularly participate in the programming contest on platforms like <strong> leetcode,codechef</strong> & solved more than 500 problems. I find joy in engaging in the exhilarating sport of cricket and I read books during my free time.<br /><br />
                I'm on a mission to grow as a software developer, continuously learning, adapting, and refining my skills. If you want to connect, feel free to reach out Let's learn and create together!
                </p>
                
                <span className="tag" style={{marginLeft : "20px"}}>&lt;/p&gt;</span><br />
                <span className="tag">&lt;/body&gt;</span><br />
            </div>
        </>
    );
}