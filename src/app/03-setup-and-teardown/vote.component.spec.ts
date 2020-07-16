import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component : VoteComponent;

  beforeEach(()=>{
    component = new VoteComponent();
  });

  it('Should increment value when called UpVote', () => {
      component.upVote();
      expect(component.totalVotes).toBe(1);
  });

  it('Should decrement value when called UpVote', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
});
});