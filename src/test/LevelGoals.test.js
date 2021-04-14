import Mocha from "mocha";
import LevelGoals from '../LevelGoals';

const assert = require('assert');

describe('LevelGoals', function() {
  describe('#createLevelItems', function() {
    it('should return an array of Goal components', function() {
        const props = {
            dataFetched: true,
            className: "test",
            levels: {
                "17": [
                    "blurb1",
                    "blurb2",
                    "blurb3"
                ]
            }
        }
        const levelGoals = new LevelGoals(props);
        const actual = levelGoals.createLevelItems();
        assert.equal(actual.length, 2);
    });

    it('should return null when data hasn\'t been fetched yet', function() {
        const props = {
            dataFetched: false
        }
        const levelGoals = new LevelGoals(props);
        assert.equal(levelGoals.render(), null);
    });
  });
});