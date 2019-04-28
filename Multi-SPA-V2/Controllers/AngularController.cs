using Microsoft.AspNetCore.Mvc;

namespace Multi_SPA_V2.Controllers
{
  public class AngularController : Controller
  {
    // GET
    public IActionResult Angular()
    {
      return
      View();
    }
  }
}
