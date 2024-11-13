// Divider.js
const Divider = () => {
    return <hr style={styles.divider} />;
};

const styles = {
    divider: {
        height: '0.050rem',        // Gives thickness to the divider
        backgroundColor: '#ccc',  // Sets the color of the divider
        marginBottom: '10px',     // Adds spacing around the divider
        //paddingBottom: '10px',
        //border: 'none',       // Removes any default border styling
        width: '80%'
    },
};

export default Divider;
