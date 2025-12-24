import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5001/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCompleted, setShowCompleted] = useState(true);
  const [stats, setStats] = useState({});
  const [currentView, setCurrentView] = useState('tasks'); // 'tasks' or 'progress'

  const users = ['All', 'Tanveer', 'Arpit', 'Mukul', 'Sunny', 'Mehul'];
  const categories = ['All', 'Quick Start', 'Early Game', 'Mid Game', 'Late Game', 'Joint Projects'];

  const playerInfo = {
    Tanveer: { 
      role: 'Master of Exploration', 
      color: '#4a9eff',
      description: 'Mining, resources, defense & supply chains',
      minecraftSkin: 'Tanveer'
    },
    Arpit: { 
      role: 'Lord of Farms', 
      color: '#4ade80',
      description: 'Automation, farms, villagers & economy',
      minecraftSkin: 'Arpit'
    },
    Mukul: { 
      role: 'Grand Architect', 
      color: '#a78bfa',
      description: 'City design, castle & decorative builds',
      minecraftSkin: 'Mukul'
    },
    Sunny: { 
      role: 'Server Admin', 
      color: '#ffd43b',
      description: 'Events, backups & community coordination',
      minecraftSkin: 'Sunny'
    },
    Mehul: { 
      role: 'Versatile Pioneer', 
      color: '#ff6b6b',
      description: 'Jack of all trades - exploration, building & innovation',
      minecraftSkin: 'Mehul'
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, [selectedUser, selectedCategory, showCompleted]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedUser !== 'All') params.assignedTo = selectedUser;
      if (selectedCategory !== 'All') params.category = selectedCategory;
      
      const response = await axios.get(API_URL, { params });
      
      let filteredTasks = response.data;
      if (!showCompleted) {
        filteredTasks = filteredTasks.filter(task => !task.completed);
      }
      
      setTasks(filteredTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/stats/summary`);
      const statsMap = {};
      response.data.forEach(stat => {
        statsMap[stat._id] = {
          total: stat.total,
          completed: stat.completed,
          percentage: Math.round((stat.completed / stat.total) * 100)
        };
      });
      setStats(statsMap);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const toggleTask = async (taskId, currentStatus) => {
    try {
      await axios.patch(`${API_URL}/${taskId}`, {
        completed: !currentStatus
      });
      fetchTasks();
      fetchStats();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const groupTasksByCategory = () => {
    const grouped = {};
    tasks.forEach(task => {
      if (!grouped[task.category]) {
        grouped[task.category] = [];
      }
      grouped[task.category].push(task);
    });
    return grouped;
  };

  const groupedTasks = groupTasksByCategory();
  const categoryOrder = ['Quick Start', 'Early Game', 'Mid Game', 'Late Game', 'Joint Projects'];

  const getPlayerStats = async (playerName) => {
    try {
      const response = await axios.get(API_URL, { params: { assignedTo: playerName } });
      const playerTasks = response.data;
      const completed = playerTasks.filter(t => t.completed).length;
      const total = playerTasks.length;
      
      const categoryBreakdown = {};
      categoryOrder.forEach(cat => {
        const catTasks = playerTasks.filter(t => t.category === cat);
        categoryBreakdown[cat] = {
          total: catTasks.length,
          completed: catTasks.filter(t => t.completed).length
        };
      });

      return {
        completed,
        total,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        categoryBreakdown
      };
    } catch (error) {
      console.error('Error fetching player stats:', error);
      return { completed: 0, total: 0, percentage: 0, categoryBreakdown: {} };
    }
  };

  return (
    <div className="app">
      <div className="frame">
        <header className="header">
          <h1 className="title">🏰 Tri-Kingdom Survival Server</h1>
          <p className="subtitle">Tanveer, Arpit, Mukul, Sunny & Mehul's Epic Quest</p>
          
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${currentView === 'tasks' ? 'active' : ''}`}
              onClick={() => setCurrentView('tasks')}
            >
              📋 Tasks
            </button>
            <button 
              className={`nav-tab ${currentView === 'progress' ? 'active' : ''}`}
              onClick={() => setCurrentView('progress')}
            >
              📊 Progress & Insights
            </button>
          </div>
        </header>

        {currentView === 'progress' ? (
          <ProgressView 
            users={users.filter(u => u !== 'All')} 
            playerInfo={playerInfo}
            stats={stats}
            getPlayerStats={getPlayerStats}
          />
        ) : (
          <>
            <section className="controls">
          <div className="filter-grid">
            <div className="filter-card">
              <div className="filter-title">Player</div>
              <div className="button-group">
                {users.map(user => (
                  <button
                    key={user}
                    className={`filter-btn ${selectedUser === user ? 'active' : ''}`}
                    onClick={() => setSelectedUser(user)}
                  >
                    {user}
                    {user !== 'All' && stats[user] && (
                      <span className="badge">{stats[user].completed}/{stats[user].total}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-card">
              <div className="filter-title">Stage</div>
              <div className="button-group">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-card">
              <div className="filter-title">Display</div>
              <label className="toggle-row">
                <input
                  type="checkbox"
                  checked={showCompleted}
                  onChange={(e) => setShowCompleted(e.target.checked)}
                />
                Show Completed
              </label>
            </div>
          </div>
        </section>

        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <section className="tasks-wrapper">
            {categoryOrder.map(category => {
              if (!groupedTasks[category] || groupedTasks[category].length === 0) return null;

              return (
                <div key={category} className="category-section">
                  <div className="category-header">
                    <h2 className="category-title">{category}</h2>
                  </div>
                  <div className="tasks-list">
                    {groupedTasks[category].map(task => (
                      <div
                        key={task._id}
                        className={`task-card ${task.completed ? 'completed' : ''}`}
                      >
                        <div className="task-checkbox">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task._id, task.completed)}
                          />
                        </div>
                        <div className="task-content">
                          <div className="task-title">{task.title}</div>
                          <div className="task-meta">
                            <span className={`user-badge user-${task.assignedTo.toLowerCase()}`}>
                              {task.assignedTo}
                            </span>
                            {task.role && <span className="role-badge">{task.role}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {tasks.length === 0 && !loading && (
          <div className="empty-state">
            <p>No tasks found. Try adjusting your filters!</p>
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
}

function ProgressView({ users, playerInfo, stats, getPlayerStats }) {
  const [detailedStats, setDetailedStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllPlayerStats();
  }, []);

  const loadAllPlayerStats = async () => {
    setLoading(true);
    const statsPromises = users.map(async (user) => {
      const userStats = await getPlayerStats(user);
      return [user, userStats];
    });
    
    const results = await Promise.all(statsPromises);
    const statsMap = Object.fromEntries(results);
    setDetailedStats(statsMap);
    setLoading(false);
  };

  if (loading) {
    return <div className="loading">Loading player insights...</div>;
  }

  const totalTasks = Object.values(detailedStats).reduce((sum, stat) => sum + stat.total, 0);
  const totalCompleted = Object.values(detailedStats).reduce((sum, stat) => sum + stat.completed, 0);
  const overallProgress = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

  return (
    <section className="progress-view">
      <div className="server-overview">
        <h2 className="section-title">🌍 Server Overview</h2>
        <div className="overview-stats">
          <div className="stat-box">
            <div className="stat-value">{totalCompleted}</div>
            <div className="stat-label">Tasks Completed</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{totalTasks}</div>
            <div className="stat-label">Total Tasks</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{overallProgress}%</div>
            <div className="stat-label">Overall Progress</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{users.length}</div>
            <div className="stat-label">Active Players</div>
          </div>
        </div>
      </div>

      <div className="players-grid">
        {users.map(user => {
          const info = playerInfo[user];
          const userStats = detailedStats[user] || { completed: 0, total: 0, percentage: 0, categoryBreakdown: {} };
          
          return (
            <div key={user} className="player-card">
              <div className="player-header">
                <div className="avatar-container">
                  <img 
                    src={`https://mc-heads.net/avatar/${info.minecraftSkin}/128`}
                    alt={`${user}'s avatar`}
                    className="minecraft-avatar"
                    onError={(e) => {
                      e.target.src = `https://crafatar.com/avatars/steve?size=128`;
                    }}
                  />
                  <div className="avatar-glow" style={{ backgroundColor: info.color }}></div>
                </div>
                <div className="player-info">
                  <h3 className="player-name">{user}</h3>
                  <div className="player-role" style={{ color: info.color }}>{info.role}</div>
                  <div className="player-description">{info.description}</div>
                </div>
              </div>

              <div className="player-progress">
                <div className="progress-header">
                  <span className="progress-text">Progress</span>
                  <span className="progress-percentage">{userStats.percentage}%</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${userStats.percentage}%`,
                      backgroundColor: info.color 
                    }}
                  ></div>
                </div>
                <div className="progress-stats">
                  <span>{userStats.completed} completed</span>
                  <span>{userStats.total - userStats.completed} remaining</span>
                </div>
              </div>

              <div className="category-breakdown">
                <div className="breakdown-title">Category Progress</div>
                {Object.entries(userStats.categoryBreakdown || {}).map(([category, data]) => {
                  if (data.total === 0) return null;
                  const catPercentage = Math.round((data.completed / data.total) * 100);
                  
                  return (
                    <div key={category} className="category-stat">
                      <div className="category-stat-header">
                        <span className="category-stat-name">{category}</span>
                        <span className="category-stat-value">{data.completed}/{data.total}</span>
                      </div>
                      <div className="mini-progress-bar">
                        <div 
                          className="mini-progress-fill" 
                          style={{ 
                            width: `${catPercentage}%`,
                            backgroundColor: info.color 
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;

