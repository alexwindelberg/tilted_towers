import React, { Component } from 'react'
import Card from '../components/card_container'
const _Scout = window.Scout;


class Layout extends Component {

    constructor() {
        super();
        this.state = { 
            /*
                p2.br.m0.weekly (Solo, Current Season)
                p10.br.m0.weekly (Duo, Current Season)
                p9.br.m0.weekly (Squad, Current Season) 
            */
            queryList : ['p2.br.m0.weekly', 'p10.br.m0.weekly', 'p9.br.m0.weekly'],
            data      : [],
            loading   : true, 
        };
        
    }
    /* Need to pass the data here */
    async componentDidMount() {
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

            let promises = this.state.queryList.map( gameModes => {
                return _Scout.players.get( fortnite.id, playerId, gameModes )
                  .then( ( data ) => {
                      return JSON.parse(JSON.stringify(data.segments));
                }).catch(error => {
                       console.log(error.message)
                    });
            })

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

        }).then((d) => {
            this.setState({ data: d });
        });
    }

    /* Also for loop through these instead of hard coding */
    


    render () {

        return (
            <div className="table" >
                <div className="row">
                    <div className="col-sm">
                        <Card/>
                    </div>
                    <div className="col-sm">
                        <Card/>
                    </div>
                    <div className="col-sm">
                        <Card/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;
