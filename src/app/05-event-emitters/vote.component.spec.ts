import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should raise voteChanged event once upVote is called', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv );
    component.upVote();

    expect(totalVotes).toBe(1);

  });
});