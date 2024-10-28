// Divider.js
const Divider = () => {
    return <hr style={styles.divider} />;
};

const styles = {
    divider: {
        height: '2px',        // Gives thickness to the divider
        backgroundColor: '#ccc',  // Sets the color of the divider
        margin: '20px 0',     // Adds spacing around the divider
        border: 'none',       // Removes any default border styling
        width: '80%'
    },
};

export default Divider;
