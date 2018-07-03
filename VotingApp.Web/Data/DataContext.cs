using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Elections;
using VotingApp.Core.Features.Users;
using VotingApp.Core.Features.Votes;

namespace VotingApp.Web.Data
{
    public class DataContext : DbContext
    {
        public DataContext()
        {
        }

        public DataContext(IDbContextOptions options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Election> Elections { get; set; }

        public DbSet<Vote> Votes { get; set; }

        public DbSet<Candidate> Candidates { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=VotingApp;Trusted_Connection=True");
            }
        }
    }
}
