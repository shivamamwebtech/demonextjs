const page = ({ params }) => {
  return (
    <div>
      {[...Array(params.sum.length)].reduce((acc, _, index) => {
        return (acc += +params.sum[index]);
      },0)}
    </div>
  );
};

export default page;
