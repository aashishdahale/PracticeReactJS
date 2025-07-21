function CurrentTime() {
  let time = new Date();

  return (
    <div>
      <h2>This clock shows time in bharat all times</h2>
      <h2>
        This is current time : {time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default CurrentTime;
