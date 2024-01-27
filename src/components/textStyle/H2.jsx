

const H2 = ({ title, styles, id }) => {
    return (
        <div>
               <h1
      className={`${styles}  lg:text-[27px] text-[22px]  lg:leading-[42px] leading-[32px] font-[500] text-[#19191d]`}
      id={id}
    >
      {title || 'No Title given'}
    </h1>
        </div>
    );
};

export default H2;