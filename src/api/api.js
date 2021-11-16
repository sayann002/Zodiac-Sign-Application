export const getHoroscope = (sign, timeframe) => {
  return fetch(
    `https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then(
      ({
        date_range,
        current_date,
        description,
        compatibility,
        mood,
        color,
        lucky_number,
        lucky_time,
      }) => {
        return (
          <>
            {/*
          <div>Date Range: {date_range}</div>
            <div>Current Date:{current_date}</div>
            <div>Description:{description}</div>
            <div>Compatibility:{compatibility}</div>
            <div>Mood:{mood}</div>
            <div>Color:{color}</div>
            <div>Lucky Number: {lucky_number}</div>
            <div>Lucky Time: {lucky_time}</div>
          
          */}
            <div className="flex">
              <h3 id="title">Date Range:</h3>

              <h3 id="desc">{date_range}</h3>
            </div>
            <div className="flex">
              <h3 id="title">Current Date:</h3>

              <h3 id="desc">{current_date}</h3>
            </div>
            <div className="flex">
              <h3 id="title">Description:</h3>

              <h3 id="desc">{description}</h3>
            </div>
            <div className="flex">
              <h3 id="title">Mood:</h3>

              <h3 id="desc">{mood}</h3>
            </div>
            <div className="flex">
              <h3 id="title">Comapatibility:</h3>

              <h3 id="desc">{compatibility}</h3>
            </div>
            <div className="flex">
              <h3 id="title">Color:</h3>

              <h3 id="desc">{color}</h3>
            </div>
            <div className="flex">
              <h3 id="title">Lucky Number:</h3>

              <h3 id="desc">{lucky_number}</h3>
            </div>
            <div className="flex">
              <h3 id="title">Lucky Time:</h3>

              <h3 id="desc">{lucky_time}</h3>
            </div>
          </>
        );
      }
    );
};
