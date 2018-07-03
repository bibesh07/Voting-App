using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VotingApp.Core.Features.Users;
using VotingApp.Web.Areas.Api.Models.Users;

namespace VotingApp.Web.Services
{
    public interface IUserService
    {
        Task<ServiceResponse<UserEmailLoginDto>> VerifyEmail(string email);
    }
}
