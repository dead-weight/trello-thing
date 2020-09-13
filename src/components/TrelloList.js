import React from 'react';


const TrelloList = (title) => {

    
    return(
        <div style={styles.container}>
            <h4>{title}</h4>
        </div>
            
    );
};

const styles = {
    container: {
        backgroundColor: "#eee", 
        borderRadius: 3
    }
}

export default TrelloList;