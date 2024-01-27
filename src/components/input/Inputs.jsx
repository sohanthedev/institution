

const Inputs = ({ onChange, value }) => {
    
    return (
        <input
        type="text"
        onChange={onChange}
        value={value}
        className="px-4 py-2 border rounded"
      />
    );
};

export default Inputs;