using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using VotingApp.Web.Areas.Api.Models.Users;
using VotingApp.Web.Services;

namespace VotingApp.Web.Areas.Api.Controllers
{
    [Route("api/users")]
    public class UsersApiController: Controller
    {
        private readonly IUserService _userService;
        
        public UsersApiController(IUserService _userService)
        {
            this._userService = _userService;
        }

        [HttpGet("VerifyEmail")]
        [ProducesResponseType(typeof(UserDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Dictionary<string, string[]>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> VerifyEmail([FromBody]UserEmailLoginDto useremaildto)
        {
            var result = await _userService.VerifyEmail(useremaildto.Email);
            if(result.Errors.Any())
            {
                return BadRequest(result.Errors);
            }
            var verification = result.Data;
            return Ok(verification);
        }
    }
}
