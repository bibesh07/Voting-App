using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using VotingApp.Core.Features.Users;
using VotingApp.Web.Areas.Api.Models.Users;
using VotingApp.Web.Data;

namespace VotingApp.Web.Services
{
    public class UserService: IUserService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper mapper;

        public UserService(DataContext dataContext,
            IMapper mapper)
        {
            this.mapper = mapper;
            this._dataContext = dataContext;
        }

        public async Task<ServiceResponse<UserEmailLoginDto>> VerifyEmail(string email)
        {
            var user = await _dataContext.Set<User>().SingleOrDefaultAsync(x => x.Email == email);
            if(user == null)
            {
                return new ServiceResponse<UserEmailLoginDto>
                {
                    Errors = { { "email", new[] { "Email does not exist" } } }
                };
            }
            return await GetUserByEmail(email);
        }


        public async Task<ServiceResponse<UserEmailLoginDto>> GetUserByEmail(string email)
        {
            var user = await _dataContext.Set<User>()
                .Where(x => x.Email == email)
                .ProjectTo<UserEmailLoginDto>(mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();

            return new ServiceResponse<UserEmailLoginDto>
            {
                Data = user
            };
        }
    }
}
