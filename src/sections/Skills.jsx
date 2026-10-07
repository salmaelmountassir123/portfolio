import React from 'react';
import {
  Code2,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  Globe,
  Layers,
  Terminal
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Bootstrap', 'Redux Toolkit']
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Python', 'Django', 'Laravel', 'Node.js', 'REST APIs', 'Express', 'PHP']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'SQL', 'Mongoose']
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      title: 'IT / Infrastructure',
      icon: ShieldCheck,
      skills: ['GLPI', 'GLPI Agent', 'Inventory', 'IT Support', 'Network Environment']
    },
    {
      title: 'CMS',
      icon: Globe,
      skills: ['WordPress', 'Template Customization']
    }
  ];

  return (
    <section className="section-wrapper skills-section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="MY SKILLS"
          title="Technologies & Tools"
          subtitle="Core engineering and IT toolchain applied across production projects and internal tools."
        />

        {/* 6 Category Grid Cards */}
        <div className="skills-cards-grid">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="skill-cat-card">
                <div className="skill-cat-header">
                  <div className="skill-icon-wrap">
                    <Icon size={18} />
                  </div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                </div>

                <div className="skill-pills-wrap">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--bg-primary);
          position: relative;
        }
        .skills-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .skills-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .skills-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .skill-cat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        .skill-cat-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .skill-cat-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .skill-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--badge-bg);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--badge-border);
        }
        .skill-cat-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .skill-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-pill {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 5px 12px;
          border-radius: var(--radius-xs);
          transition: var(--transition-fast);
        }
        .skill-cat-card:hover .skill-pill {
          border-color: var(--border-strong);
        }
        .skill-pill:hover {
          background: var(--badge-bg);
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
