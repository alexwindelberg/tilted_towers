const _Scout = window.Scout;

class Scout {
  static async init() {
    await _Scout.configure({
      clientId: 'af2ef8ea-a458-434e-8c00-26fb8f938eb1',
      clientSecret: '10dcae04dca819ab4dd0505fa6dc8b923242bd61230c612a1eaf3377987a4a59',
      scope: 'public.read'
    });

    var titles = await _Scout.titles.list();
    var fortnite = titles.find( t => t.slug === 'fortnite' );

    _Scout.players.search( 'Ninja', 'epic', 'pc', fortnite.id, true, true )
      .then( ( data ) => {
        var playerId = data.results[ 0 ].player.playerId;

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
           1) Create an array that holds the keys to the query
           2) Loop through and get required data
           3) Store results in array
           4) On completion return data to component
        */
        /*
          p2.br.m0.weekly (Solo, Current Season)
          p10.br.m0.weekly (Duo, Current Season)
          p9.br.m0.weekly (Squad, Current Season) 
        */
        _Scout.players.get( fortnite.id, playerId, 'p2.br.m0.weekly' )
          .then( ( data ) => {
            // Solo stats, current season.
            console.log( JSON.stringify( data ) );
          });

        _Scout.players.get( fortnite.id, playerId, 'p10.br.m0.weekly' )
          .then( ( data ) => {
            // Duo stats, current season.
            console.log( JSON.stringify( data ) );
          }); 

          _Scout.players.get( fortnite.id, playerId, 'p9.br.m0.weekly' )
          .then( ( data ) => {
            // Squad stats, current season.
            console.log( JSON.stringify( data ) );
          });
        

      });
  }
}

export default Scout;
