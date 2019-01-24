const _Scout = window.Scout;

class Scout {

  static async init() {
    await _Scout.configure({
      clientId: 'af2ef8ea-a458-434e-8c00-26fb8f938eb1',
      clientSecret: '10dcae04dca819ab4dd0505fa6dc8b923242bd61230c612a1eaf3377987a4a59',
      scope: 'public.read'
    });

    const queryList = ['p2.br.m0.weekly', 'p10.br.m0.weekly', 'p9.br.m0.weekly'];
    var titles = await _Scout.titles.list();
    var fortnite = titles.find( t => t.slug === 'fortnite' );

    /*
          Possible ways to handle,
          1) Extend this class to inherate component allowing the ability to start
             sending components to the main.js? - is it worth or will it cost to much time?
          2) Stay's as is return's data to the component and organize the data in the component
             to be organized
          3) Include redux and place data in redux state even though small app
    */
    /*
           The plan, 
           - 1) Create an array that holds the keys to the query
           2) Loop through and get required data
           3) Store results in array
           4) On completion return data to component
    */
    /*
          p2.br.m0.weekly (Solo, Current Season)
          p10.br.m0.weekly (Duo, Current Season)
          p9.br.m0.weekly (Squad, Current Season) 
    */

    return _Scout.players.search( 'Ninja', 'epic', 'pc', fortnite.id, true, true )
      .then( ( data ) => {
        var playerId = data.results[ 0 ].player.playerId;
        
        /*
          Get the data from the database then stringify followed by parse
          store these in the promises var.
        */
        let promises = queryList.map( gameModes => {
            return _Scout.players.get( fortnite.id, playerId, gameModes )
              .then( ( data ) => {
                  return JSON.parse(JSON.stringify(data.segments));
              })
          })

        /*
          iterate through the data and get the data we need store in objs to be returned
        */
        return Promise.all(promises).then((data) => {
          
          return data.map( tuple => {
            const obj = {
              GameMode      : tuple[0].metadata[0].displayValue,
              MatchesPlayed : tuple[0].stats[2].value,
              Kills         : tuple[0].stats[0].value,
              KDratio       : tuple[0].stats[8].value,
              Wins          : tuple[0].stats[3].value,
              WinRatio      : (tuple[0].stats[3].value)/(tuple[0].stats[2].value) * 100,
              Score         : tuple[0].stats[1].value,
            }
            return obj;
          })

        }).catch(error => { 
          console.log(error.message)
        });

      })
  }
}


export default Scout;