import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      <div className="activity-details">
        <h2 className="activity-title">{activity.title}</h2>
        <p className="activity-description">{activity.description}</p>
        <div className="participants-section">
          <h3 style={{ marginBottom: '0.5em', color: '#2c3e50' }}>Participants</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '1.5em',
            background: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            margin: 0,
            marginBottom: '1em'
          }}>
            {activity.participants && activity.participants.length > 0 ? (
              activity.participants.map((p, idx) => (
                <li key={idx} style={{ padding: '0.25em 0', color: '#34495e' }}>
                  {p}
                </li>
              ))
            ) : (
              <li style={{ color: '#888' }}>No participants yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;