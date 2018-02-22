import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState(
                {
                    albums: response.data,
                }
            ));
    }

    renderAlbums() {
        return _.map(this.state.albums, album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    // http://rallycoding.herokuapp.com/api/music_albums
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
