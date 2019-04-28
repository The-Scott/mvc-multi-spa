using Microsoft.AspNetCore.Mvc;

namespace Multi_SPA_V2.Controllers
{
  public class NavigationController : Controller
  {
    // GET
    public IActionResult Index()
    {
      return
      View();
    }

    public IActionResult Privacy()
    {
      return View();
    }

    public IActionResult Error()
    {
      return View();
    }
  }
}
