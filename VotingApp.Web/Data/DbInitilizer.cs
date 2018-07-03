using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Elections;
using VotingApp.Core.Features.Users;
using VotingApp.Core.Features.Votes;

namespace VotingApp.Web.Data
{
    public class DbInitilizer
    {
        public static void SeedData(DataContext dataContext)
        {
            //_SeedGuestUser(dataContext);
            _SeedVerifiedUser(dataContext);
            //_SeedSuperUser(dataContext);
            //_SeedElection(dataContext);
            //_SeedCandidate(dataContext);
            //_SeedVote(dataContext);
        }

        private static void _SeedVerifiedUser(DataContext dataContext)
        {
            var user = dataContext.Set<User>();
            if (user.Any())
            {
                return;
            }

            user.Add(new User
            {
                Email = "bibesh.kc@selu.edu",
                Password = "password",
                Role = Roles.Verified,
                UserName = "bebs_cr7"
            });
            dataContext.SaveChanges();
        }

        private static void _SeedSuperUser(DbContext dataContext)
        {
            var user = dataContext.Set<User>();
            if (user.Any())
            {
                return;
            }

            user.Add(new User
            {
                Email = "bibeshkc01@selu.edu",
                Password = "password",
                Role = Roles.Verified,
                UserName = "bebs_cr7"
            });
            dataContext.SaveChanges();
        }


        private static void _SeedGuestUser(DbContext dataContext)
        {
            var user = dataContext.Set<User>();
            if (user.Any())
            {
                return;
            }

            user.Add(new User
            {
                Email = "guest@gmail.com",
                Password = "password",
                Role = Roles.Guest,
                UserName = "guest_user"
            });
            dataContext.SaveChanges();
        }

        private static void _SeedElection(DbContext dataContext)
        {
            var election = dataContext.Set<Election>();
            if (election.Any())
            {
                return;
            }

            election.Add(new Election
            {
                Title = "NSAS",
                ElectionStartDate = DateTime.Now.AddDays(5).AddHours(12),
                ElectionEndDate = DateTime.Now.AddDays(12).AddHours(12),
                Description = "Test election hosted problably by admin",
                CandidateLimit = 4,
                HostUserId = 1,
            });

            dataContext.SaveChanges();
        }

        private static void _SeedCandidate(DbContext dataContext)
        {
            var candidate = dataContext.Set<Candidate>();
            if (candidate.Any())
            {
                return;
            }
            candidate.Add(new Candidate
              {
                    Name = "Bibesh",
                    Description = "I am a very capable person " ,
                    ElectionId=1,
               });
            dataContext.SaveChanges();
        }

        private static void _SeedVote(DbContext dataContext)
        {
            var vote = dataContext.Set<Vote>();
            var candidate = dataContext.Set<Candidate>().ToArray();
            var election = dataContext.Set<Election>().ToArray();
            var user = dataContext.Set<User>().ToArray();

            vote.Add(new Vote
            {
                Candidate= candidate[0],
                User=user[0],
            });
            dataContext.SaveChanges();
        }
    }
}
