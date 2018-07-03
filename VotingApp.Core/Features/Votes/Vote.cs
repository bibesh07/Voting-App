using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Users;

namespace VotingApp.Core.Features.Votes
{
    public class Vote
    {
        public int Id { get; set; }

        public int? UserId { get; set; }

        public virtual User User { get; set; }

        public int? CandidateId { get; set; }

        public virtual Candidate Candidate { get; set; }
    }
}
