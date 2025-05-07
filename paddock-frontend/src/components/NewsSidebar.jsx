import React from 'react';

const NewsSidebar = () => {
    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <h3>News</h3>
            </div>

            <div>
                <img src="/assets/news/ColapintoCrashNews.png" style={styles.thumbnail} alt="News thumbnail" />
                <h4 style={styles.title}>Colapinto Crash brings recent Williams Struggles</h4>
                <p style={styles.subtitle}>Willimas confirms Colapinto seat is not secured for the 2025 season</p>
            </div>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: "#111",
        borderRadius: "12px",
        padding: "1.5rem",
        color: "#fff",
        width: "100%",
        maxWidth: "380px",
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        color: '#bbb',
        paddingRight: '0.5rem',
      },
      thumbnail: {
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "6px",
        marginBottom: "0.5rem",
      },
      
      title: {
        fontSize: "1rem",
        fontWeight: "600",
        marginBottom: "0.3rem",
      },
      
      subtitle: {
        fontSize: "0.85rem",
        color: "#aaa",
      },
}

export default NewsSidebar;