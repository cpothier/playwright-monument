import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { UnitsPage } from '../pages/units.page';
import { SideBar } from '../pages/sidebar.page';

test('test units permssions', async ({ page, request }) => {

  const loginPage = new LoginPage(page);
  const unitPage = new UnitsPage(page);
  const sidebar = new SideBar(page);

  
//give all access to the role
  const response = await request.patch("https://api.dev.monument.io/roles/4fd48d40-9556-11ee-8f62-192c1cd9645d", {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer Bearer eyJraWQiOiJ6NXFuMUVPZ0lYcW1yanhWWkJ5N0lqVGhGejNFTzF5Mks2N1dlSGQrXC9UWT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5YTBlYzg5MS1jYjVmLTQ2MjMtYTk5MS00NTMxZjE3MDM3NDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9Ld1V4dVM0Y0wiLCJjbGllbnRfaWQiOiIxZzE4a2trY25wZWc5azR0NWZqZG10OW52YiIsIm9yaWdpbl9qdGkiOiI5ZDAyMjVkNS04MDczLTQ4NDQtYmJhNy1iOWU2ZTc0NWVkNWYiLCJldmVudF9pZCI6IjJmNmE0ZDYxLTM1MmUtNGM4ZC05MmViLTg0NjA1MTJlZWFmNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDIzMzM5NzMsImV4cCI6MTcwMjMzNzU3MywiaWF0IjoxNzAyMzMzOTczLCJqdGkiOiI4ZmQzMDg4My1lYWE5LTQ3ZmMtODIxOC1kOGY1YjJiNGNjNjgiLCJ1c2VybmFtZSI6IjlhMGVjODkxLWNiNWYtNDYyMy1hOTkxLTQ1MzFmMTcwMzc0OCJ9.LGe-6U8M75bdqcoyQjlm_ZnWDOdOT4nhT9yT2Sy6X1tMoOz9Lh0HVNPsDd8ZizAqW3D4eLn5kJsgPWhiy275v9hd2IWAV4hfjcOm7jAqPnLNkkqWRrjxh134r9wVo9tWQE-WBYTpSPx2oGir_cVyoMOMs80scuijPvCjt9SNhKbfJ3z23cqqc-aH3xKFyuNJfxXTlPWokbkAfBuriQt6Op5GrSfv-hWsipGb480C2o1WG-izITvbOSjlHXC-pCu35SoYVZpDore8aCSR37oqveAQyzG2KUMH0JXxNE_fSU2TbFAM5ycbo1F6PZD_xdeVPJvMAL4XihwfdfWEQRY5Fw',
      'Cookie': 'connect.sid=s%3AvZVypwAWfY2VfWOsL6Vx6rjZbH6M0yt7.4M65EHaq1815odOPRAwu2Md9RJqEx64EJ8dhcyW1MCs'
    },
        data: {
                "id": "23026300-9862-11ee-9470-cf730896e625",
                "name": "Test Roles QA",
                "description": "",
                "isAdmin": false,
                "permissions": {
                    "leads": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "tasks": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "units": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "invoice": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "payment": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "reports": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "tenants": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "dashboard": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "promotions": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "unitGroups": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "facilityMap": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "streetRates": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "inPlaceRents": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "massMessages": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "pricingRules": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "rolesSettings": {
                        "canEdit": false,
                        "canView": true,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "usersSettings": {
                        "canEdit": false,
                        "canView": false,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "singleMessages": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "delinquencyRules": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "facilitiesSettings": {
                        "canEdit": false,
                        "canView": true,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "organizationSettings": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "rentalPortalSettings": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "communicationTemplates": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    }
                }
        }
        
  })
 await expect(response.status()).toBe(200)

  await loginPage.goto();
  await loginPage.login();
  await expect(sidebar.units).toBeVisible();
  await sidebar.clickUnits();
  await expect(unitPage.addUnitButton).toBeVisible();
  await expect(unitPage.unitDetailsLink).toBeVisible({ timeout: 10000 });
  await unitPage.unitDetailsLink.click();
  await expect(page.getByText('Occupied').first()).toBeVisible();
  await sidebar.clickLogout();
  expect(page.getByText("You have been logged out")).toBeVisible();

  //remove the create access
  const response2 = await request.patch("https://api.dev.monument.io/roles/4fd48d40-9556-11ee-8f62-192c1cd9645d", {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer Bearer eyJraWQiOiJ6NXFuMUVPZ0lYcW1yanhWWkJ5N0lqVGhGejNFTzF5Mks2N1dlSGQrXC9UWT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5YTBlYzg5MS1jYjVmLTQ2MjMtYTk5MS00NTMxZjE3MDM3NDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9Ld1V4dVM0Y0wiLCJjbGllbnRfaWQiOiIxZzE4a2trY25wZWc5azR0NWZqZG10OW52YiIsIm9yaWdpbl9qdGkiOiI5ZDAyMjVkNS04MDczLTQ4NDQtYmJhNy1iOWU2ZTc0NWVkNWYiLCJldmVudF9pZCI6IjJmNmE0ZDYxLTM1MmUtNGM4ZC05MmViLTg0NjA1MTJlZWFmNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDIzMzM5NzMsImV4cCI6MTcwMjMzNzU3MywiaWF0IjoxNzAyMzMzOTczLCJqdGkiOiI4ZmQzMDg4My1lYWE5LTQ3ZmMtODIxOC1kOGY1YjJiNGNjNjgiLCJ1c2VybmFtZSI6IjlhMGVjODkxLWNiNWYtNDYyMy1hOTkxLTQ1MzFmMTcwMzc0OCJ9.LGe-6U8M75bdqcoyQjlm_ZnWDOdOT4nhT9yT2Sy6X1tMoOz9Lh0HVNPsDd8ZizAqW3D4eLn5kJsgPWhiy275v9hd2IWAV4hfjcOm7jAqPnLNkkqWRrjxh134r9wVo9tWQE-WBYTpSPx2oGir_cVyoMOMs80scuijPvCjt9SNhKbfJ3z23cqqc-aH3xKFyuNJfxXTlPWokbkAfBuriQt6Op5GrSfv-hWsipGb480C2o1WG-izITvbOSjlHXC-pCu35SoYVZpDore8aCSR37oqveAQyzG2KUMH0JXxNE_fSU2TbFAM5ycbo1F6PZD_xdeVPJvMAL4XihwfdfWEQRY5Fw',
      'Cookie': 'connect.sid=s%3AvZVypwAWfY2VfWOsL6Vx6rjZbH6M0yt7.4M65EHaq1815odOPRAwu2Md9RJqEx64EJ8dhcyW1MCs'
    },
        data: {
                "id": "23026300-9862-11ee-9470-cf730896e625",
                "name": "Test Roles QA",
                "description": "",
                "isAdmin": false,
                "permissions": {
                    "leads": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "tasks": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "units": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": false,
                        "canDelete": true
                    },
                    "invoice": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "payment": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "reports": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "tenants": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "dashboard": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "promotions": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "unitGroups": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "facilityMap": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "streetRates": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "inPlaceRents": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "massMessages": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "pricingRules": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "rolesSettings": {
                        "canEdit": false,
                        "canView": true,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "usersSettings": {
                        "canEdit": false,
                        "canView": false,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "singleMessages": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "delinquencyRules": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "facilitiesSettings": {
                        "canEdit": false,
                        "canView": true,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "organizationSettings": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "rentalPortalSettings": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "communicationTemplates": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    }
                }
        }
        
  })
  await loginPage.goto();
  await loginPage.login();
  await expect(sidebar.units).toBeVisible();
  await sidebar.clickUnits();
  await expect(page.locator('table tr input').nth(1)).toBeVisible();
  await expect(unitPage.addUnitButton).not.toBeVisible();
  await page.locator('[href="/logout"]').click();
  expect(page.getByText("You have been logged out")).toBeVisible();
  
  //remove the edit access
  const response3 = await request.patch("https://api.dev.monument.io/roles/4fd48d40-9556-11ee-8f62-192c1cd9645d", {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer Bearer eyJraWQiOiJ6NXFuMUVPZ0lYcW1yanhWWkJ5N0lqVGhGejNFTzF5Mks2N1dlSGQrXC9UWT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5YTBlYzg5MS1jYjVmLTQ2MjMtYTk5MS00NTMxZjE3MDM3NDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9Ld1V4dVM0Y0wiLCJjbGllbnRfaWQiOiIxZzE4a2trY25wZWc5azR0NWZqZG10OW52YiIsIm9yaWdpbl9qdGkiOiI5ZDAyMjVkNS04MDczLTQ4NDQtYmJhNy1iOWU2ZTc0NWVkNWYiLCJldmVudF9pZCI6IjJmNmE0ZDYxLTM1MmUtNGM4ZC05MmViLTg0NjA1MTJlZWFmNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDIzMzM5NzMsImV4cCI6MTcwMjMzNzU3MywiaWF0IjoxNzAyMzMzOTczLCJqdGkiOiI4ZmQzMDg4My1lYWE5LTQ3ZmMtODIxOC1kOGY1YjJiNGNjNjgiLCJ1c2VybmFtZSI6IjlhMGVjODkxLWNiNWYtNDYyMy1hOTkxLTQ1MzFmMTcwMzc0OCJ9.LGe-6U8M75bdqcoyQjlm_ZnWDOdOT4nhT9yT2Sy6X1tMoOz9Lh0HVNPsDd8ZizAqW3D4eLn5kJsgPWhiy275v9hd2IWAV4hfjcOm7jAqPnLNkkqWRrjxh134r9wVo9tWQE-WBYTpSPx2oGir_cVyoMOMs80scuijPvCjt9SNhKbfJ3z23cqqc-aH3xKFyuNJfxXTlPWokbkAfBuriQt6Op5GrSfv-hWsipGb480C2o1WG-izITvbOSjlHXC-pCu35SoYVZpDore8aCSR37oqveAQyzG2KUMH0JXxNE_fSU2TbFAM5ycbo1F6PZD_xdeVPJvMAL4XihwfdfWEQRY5Fw',
      'Cookie': 'connect.sid=s%3AvZVypwAWfY2VfWOsL6Vx6rjZbH6M0yt7.4M65EHaq1815odOPRAwu2Md9RJqEx64EJ8dhcyW1MCs'
    },
        data: {
                "id": "23026300-9862-11ee-9470-cf730896e625",
                "name": "Test Roles QA",
                "description": "",
                "isAdmin": false,
                "permissions": {
                    "leads": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "tasks": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "units": {
                        "canEdit": false,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "invoice": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "payment": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "reports": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "tenants": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "dashboard": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "promotions": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "unitGroups": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "facilityMap": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "streetRates": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "inPlaceRents": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "massMessages": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "pricingRules": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "rolesSettings": {
                        "canEdit": false,
                        "canView": true,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "usersSettings": {
                        "canEdit": false,
                        "canView": false,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "singleMessages": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "delinquencyRules": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "facilitiesSettings": {
                        "canEdit": false,
                        "canView": true,
                        "canCreate": false,
                        "canDelete": false
                    },
                    "organizationSettings": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "rentalPortalSettings": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    },
                    "communicationTemplates": {
                        "canEdit": true,
                        "canView": true,
                        "canCreate": true,
                        "canDelete": true
                    }
                }
        }
        
  })
  await loginPage.goto();
  await loginPage.login();
  await expect(sidebar.units).toBeVisible();
  await sidebar.clickUnits();
  await expect(page.locator('table tr input').nth(1)).toBeVisible();
  await expect(unitPage.addUnitButton).toBeVisible();
  await expect(unitPage.unitDetailsLink).not.toBeVisible();
  await page.locator('[href="/logout"]').click();
  expect(page.getByText("You have been logged out")).toBeVisible();
});
