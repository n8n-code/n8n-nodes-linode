import type { INodeProperties } from 'n8n-workflow';

export const profileDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					]
				}
			},
			"options": [
				{
					"name": "Get Profile",
					"value": "Get Profile",
					"action": "Profile View",
					"description": "Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.\n\nThis endpoint is always accessible, no matter what OAuth scopes the acting token has.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile"
						}
					}
				},
				{
					"name": "Update Profile",
					"value": "Update Profile",
					"action": "Profile Update",
					"description": "Update information in your Profile.  This endpoint requires the \"account:read_write\" OAuth Scope.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/profile"
						}
					}
				},
				{
					"name": "Get Profile Apps",
					"value": "Get Profile Apps",
					"action": "Authorized Apps List",
					"description": "This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/apps"
						}
					}
				},
				{
					"name": "Delete Profile App",
					"value": "Delete Profile App",
					"action": "App Access Revoke",
					"description": "Expires this app token. This token may no longer be used to access your Account.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/profile/apps/{{$parameter[\"appId\"]}}"
						}
					}
				},
				{
					"name": "Get Profile App",
					"value": "Get Profile App",
					"action": "Authorized App View",
					"description": "Returns information about a single app you've authorized to access your Account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/apps/{{$parameter[\"appId\"]}}"
						}
					}
				},
				{
					"name": "Get Devices",
					"value": "Get Devices",
					"action": "Trusted Devices List",
					"description": "Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/devices"
						}
					}
				},
				{
					"name": "Revoke Trusted Device",
					"value": "Revoke Trusted Device",
					"action": "Trusted Device Revoke",
					"description": "Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/profile/devices/{{$parameter[\"deviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Trusted Device",
					"value": "Get Trusted Device",
					"action": "Trusted Device View",
					"description": "Returns a single active TrustedDevice for your User.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/devices/{{$parameter[\"deviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Profile Grants",
					"value": "Get Profile Grants",
					"action": "Grants List",
					"description": "This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.\n\nFor example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.\n\nAny client may access this endpoint; no OAuth scopes are required.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/grants"
						}
					}
				},
				{
					"name": "Get Profile Logins",
					"value": "Get Profile Logins",
					"action": "Logins List",
					"description": "Returns a collection of successful account logins from this user during the last 90 days.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/logins"
						}
					}
				},
				{
					"name": "Get Profile Login",
					"value": "Get Profile Login",
					"action": "Login View",
					"description": "Returns a login object displaying information about a successful account login from this user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/logins/{{$parameter[\"loginId\"]}}"
						}
					}
				},
				{
					"name": "Delete Profile Phone Number",
					"value": "Delete Profile Phone Number",
					"action": "Phone Number Delete",
					"description": "Delete the verified phone number for the User making this request.\n\nUse this command to opt out of SMS messages for the requesting User after a phone number has been verified with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/profile/phone-number"
						}
					}
				},
				{
					"name": "Post Profile Phone Number",
					"value": "Post Profile Phone Number",
					"action": "Phone Number Verification Code Send",
					"description": "Send a one-time verification code via SMS message to the submitted phone number. Providing your phone number helps ensure you can securely access your Account in case other ways to connect are lost. Your phone number is only used to verify your identity by sending an SMS message. Standard carrier messaging fees may apply.\n\n* By accessing this command you are opting in to receive SMS messages. You can opt out of SMS messages by using the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command after your phone number is verified.\n\n* Verification codes are valid for 10 minutes after they are sent.\n\n* Subsequent requests made prior to code expiration result in sending the same code.\n\nOnce a verification code is received, verify your phone number with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/phone-number"
						}
					}
				},
				{
					"name": "Post Profile Phone Number Verify",
					"value": "Post Profile Phone Number Verify",
					"action": "Phone Number Verify",
					"description": "Verify a phone number by confirming the one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.\n\n* Verification codes are valid for 10 minutes after they are sent.\n\n* Only the same User that made the verification code request can use that code with this command.\n\nOnce completed, the verified phone number is assigned to the User making the request. To change the verified phone number for a User, first use the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command, then begin the verification process again with the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/phone-number/verify"
						}
					}
				},
				{
					"name": "Get User Preferences",
					"value": "Get User Preferences",
					"action": "User Preferences View",
					"description": "View a list of user preferences tied to the OAuth client that generated\nthe token making the request. The user preferences endpoints allow\nconsumers of the API to store arbitrary JSON data, such as a user's font\nsize preference or preferred display name. User preferences are available\nfor each OAuth client registered to your account, and as such an account can\nhave multiple user preferences.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/preferences"
						}
					}
				},
				{
					"name": "Update User Preferences",
					"value": "Update User Preferences",
					"action": "User Preferences Update",
					"description": "Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/profile/preferences"
						}
					}
				},
				{
					"name": "Get Security Questions",
					"value": "Get Security Questions",
					"action": "Security Questions List",
					"description": "Returns a collection of security questions and their responses, if any, for your User Profile.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/security-questions"
						}
					}
				},
				{
					"name": "Post Security Questions",
					"value": "Post Security Questions",
					"action": "Security Questions Answer",
					"description": "Adds security question responses for your User.\n\nRequires exactly three unique questions.\n\nPrevious responses are overwritten if answered or reset to `null` if unanswered.\n\n**Note**: Security questions must be answered for your User prior to accessing the **Two Factor Secret Create** ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/security-questions"
						}
					}
				},
				{
					"name": "Get SSH Keys",
					"value": "Get SSH Keys",
					"action": "SSH Keys List",
					"description": "Returns a collection of SSH Keys you've added to your Profile.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/sshkeys"
						}
					}
				},
				{
					"name": "Add SSH Key",
					"value": "Add SSH Key",
					"action": "SSH Key Add",
					"description": "Adds an SSH Key to your Account profile.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/sshkeys"
						}
					}
				},
				{
					"name": "Delete SSH Key",
					"value": "Delete SSH Key",
					"action": "SSH Key Delete",
					"description": "Deletes an SSH Key you have access to.\n\n**Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/profile/sshkeys/{{$parameter[\"sshKeyId\"]}}"
						}
					}
				},
				{
					"name": "Get SSH Key",
					"value": "Get SSH Key",
					"action": "SSH Key View",
					"description": "Returns a single SSH Key object identified by `id` that you have access to view.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/sshkeys/{{$parameter[\"sshKeyId\"]}}"
						}
					}
				},
				{
					"name": "Update SSH Key",
					"value": "Update SSH Key",
					"action": "SSH Key Update",
					"description": "Updates an SSH Key that you have permission to `read_write`.\n\nOnly SSH key labels can be updated.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/profile/sshkeys/{{$parameter[\"sshKeyId\"]}}"
						}
					}
				},
				{
					"name": "Tfa Disable",
					"value": "Tfa Disable",
					"action": "Two Factor Authentication Disable",
					"description": "Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/tfa-disable"
						}
					}
				},
				{
					"name": "Tfa Enable",
					"value": "Tfa Enable",
					"action": "Two Factor Secret Create",
					"description": "Generates a Two Factor secret for your User. To enable TFA for your User, enter the secret obtained from this command with the **Two Factor Authentication Confirm/Enable** ([POST /profile/tfa-enable-confirm](/docs/api/profile/#two-factor-authentication-confirmenable)) command.\nOnce enabled, logins from untrusted computers are required to provide\na TFA code before they are successful.\n\n**Note**: Before you can enable TFA, security questions must be answered for your User by accessing the **Security Questions Answer** ([POST /profile/security-questions](/docs/api/profile/#security-questions-answer)) command.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/tfa-enable"
						}
					}
				},
				{
					"name": "Tfa Confirm",
					"value": "Tfa Confirm",
					"action": "Two Factor Authentication Confirm/Enable",
					"description": "Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/tfa-enable-confirm"
						}
					}
				},
				{
					"name": "Get Personal Access Tokens",
					"value": "Get Personal Access Tokens",
					"action": "Personal Access Tokens List",
					"description": "Returns a paginated list of Personal Access Tokens currently active for your User.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/tokens"
						}
					}
				},
				{
					"name": "Create Personal Access Token",
					"value": "Create Personal Access Token",
					"action": "Personal Access Token Create",
					"description": "Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile/tokens"
						}
					}
				},
				{
					"name": "Delete Personal Access Token",
					"value": "Delete Personal Access Token",
					"action": "Personal Access Token Revoke",
					"description": "Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/profile/tokens/{{$parameter[\"tokenId\"]}}"
						}
					}
				},
				{
					"name": "Get Personal Access Token",
					"value": "Get Personal Access Token",
					"action": "Personal Access Token View",
					"description": "Returns a single Personal Access Token.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/tokens/{{$parameter[\"tokenId\"]}}"
						}
					}
				},
				{
					"name": "Update Personal Access Token",
					"value": "Update Personal Access Token",
					"action": "Personal Access Token Update",
					"description": "Updates a Personal Access Token.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/profile/tokens/{{$parameter[\"tokenId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile"
					]
				}
			}
		},
		{
			"displayName": "PUT /profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Authentication Type",
			"name": "authentication_type",
			"type": "options",
			"default": "password",
			"description": "This account's Cloud Manager authentication type. Authentication types are chosen through\nCloud Manager and authorized when logging into your account. These authentication types are either\nthe user's password (in conjunction with their username), or the name of their\nindentity provider such as GitHub. For example, if a user:\n\n- Has never used Third-Party Authentication, their authentication type will be `password`.\n- Is using Third-Party Authentication, their authentication type will be the name of their Identity Provider (eg. `github`).\n- Has used Third-Party Authentication and has since revoked it, their authentication type will be `password`.\n\n\n**Note:** This functionality may not yet be available in Cloud Manager.\nSee the [Cloud Manager Changelog](/changelog/cloud-manager/) for the latest updates.\n",
			"options": [
				{
					"name": "Password",
					"value": "password"
				},
				{
					"name": "Github",
					"value": "github"
				}
			],
			"routing": {
				"send": {
					"property": "authentication_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Authorized Keys",
			"name": "authorized_keys",
			"type": "json",
			"default": "null",
			"description": "The list of SSH Keys authorized to use Lish for your User. This value is ignored if `lish_auth_method` is \"disabled.\"\n",
			"routing": {
				"send": {
					"property": "authorized_keys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "example-user@gmail.com",
			"description": "Your email address.  This address will be used for communication with Linode as necessary.\n",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Email Notifications",
			"name": "email_notifications",
			"type": "boolean",
			"default": true,
			"description": "If true, you will receive email notifications about account activity.  If false, you may still receive business-critical communications through email.\n",
			"routing": {
				"send": {
					"property": "email_notifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Ip Whitelist Enabled",
			"name": "ip_whitelist_enabled",
			"type": "boolean",
			"default": false,
			"description": "If true, logins for your User will only be allowed from whitelisted IPs. This setting is currently deprecated, and cannot be enabled.\n\nIf you disable this setting, you will not be able to re-enable it.\n",
			"routing": {
				"send": {
					"property": "ip_whitelist_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Lish Auth Method",
			"name": "lish_auth_method",
			"type": "options",
			"default": "keys_only",
			"description": "The authentication methods that are allowed when connecting to [the Linode Shell (Lish)](/docs/guides/lish/).\n* `keys_only` is the most secure if you intend to use Lish.\n* `disabled` is recommended if you do not intend to use Lish at all.\n* If this account's Cloud Manager authentication type is set to a Third-Party Authentication method, `password_keys` cannot be used as your Lish authentication method. To view this account's Cloud Manager `authentication_type` field, send a request to the [View Profile](/docs/api/profile/#profile-view) endpoint.\n",
			"options": [
				{
					"name": "Password Keys",
					"value": "password_keys"
				},
				{
					"name": "Keys Only",
					"value": "keys_only"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				}
			],
			"routing": {
				"send": {
					"property": "lish_auth_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Referrals",
			"name": "referrals",
			"type": "json",
			"default": "{\n  \"code\": \"871be32f49c1411b14f29f618aaf0c14637fb8d3\",\n  \"completed\": 0,\n  \"credit\": 0,\n  \"pending\": 0,\n  \"total\": 0,\n  \"url\": \"https://www.linode.com/?r=871be32f49c1411b14f29f618aaf0c14637fb8d3\"\n}",
			"description": "Information about your status in our referral program.\n\nThis information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.\n",
			"routing": {
				"send": {
					"property": "referrals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Restricted",
			"name": "restricted",
			"type": "boolean",
			"default": false,
			"description": "If true, your User has restrictions on what can be accessed on your Account. To get details on what entities/actions you can access/perform, see [/profile/grants](/docs/api/profile/#grants-list).\n",
			"routing": {
				"send": {
					"property": "restricted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "timezone",
			"type": "string",
			"default": "US/Eastern",
			"description": "The timezone you prefer to see times in. This is not used by the API directly. It is provided for the benefit of clients such as the Linode Cloud Manager and other clients built on the API. All times returned by the API are in UTC.\n",
			"routing": {
				"send": {
					"property": "timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Two Factor Auth",
			"name": "two_factor_auth",
			"type": "boolean",
			"default": true,
			"description": "If true, logins from untrusted computers will require Two Factor Authentication.  See [/profile/tfa-enable](/docs/api/profile/#two-factor-secret-create) to enable Two Factor Authentication.\n",
			"routing": {
				"send": {
					"property": "two_factor_auth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Uid",
			"name": "uid",
			"type": "number",
			"default": 1234,
			"description": "Your unique ID in our system. This value will never change, and can safely be used to identify your User.\n",
			"routing": {
				"send": {
					"property": "uid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "exampleUser",
			"description": "Your username, used for logging in to our system.\n",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Verified Phone Number",
			"name": "verified_phone_number",
			"type": "string",
			"default": "+5555555555",
			"description": "The phone number verified for this Profile with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.\n\n`null` if this Profile has no verified phone number.\n",
			"routing": {
				"send": {
					"property": "verified_phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Apps"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Apps"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Apps"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /profile/apps/{appId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete Profile App"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete Profile App"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/apps/{appId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile App"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile App"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Devices"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /profile/devices/{deviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Revoke Trusted Device"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Revoke Trusted Device"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/devices/{deviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Trusted Device"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Trusted Device"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/grants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Grants"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/logins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Logins"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Logins"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/logins/{loginId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Login"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Profile Login"
					]
				}
			}
		},
		{
			"displayName": "DELETE /profile/phone-number",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete Profile Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete Profile Phone Number"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/phone-number",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Profile Phone Number"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Iso Code",
			"name": "iso_code",
			"type": "string",
			"default": "US",
			"description": "The two-letter ISO 3166 country code associated with the phone number.",
			"routing": {
				"send": {
					"property": "iso_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Profile Phone Number"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "555-555-5555",
			"description": "A valid phone number.",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Profile Phone Number"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Profile Phone Number"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/phone-number/verify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Profile Phone Number Verify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Otp Code",
			"name": "otp_code",
			"type": "string",
			"default": "US",
			"description": "The one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.",
			"routing": {
				"send": {
					"property": "otp_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Profile Phone Number Verify"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Profile Phone Number Verify"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get User Preferences"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get User Preferences"
					]
				}
			}
		},
		{
			"displayName": "PUT /profile/preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update User Preferences"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update User Preferences"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/security-questions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Security Questions"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Security Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/security-questions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Security Questions"
					]
				}
			}
		},
		{
			"displayName": "Security Questions",
			"name": "security_questions",
			"type": "json",
			"default": "[\n  {\n    \"question_id\": 1,\n    \"response\": \"Gotham City\",\n    \"security_question\": \"In what city were you born?\"\n  }\n]",
			"routing": {
				"send": {
					"property": "security_questions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Security Questions"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Post Security Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/sshkeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get SSH Keys"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get SSH Keys"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get SSH Keys"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get SSH Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/sshkeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The date this key was added.\n",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 42,
			"description": "The unique identifier of an SSH Key object.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "My SSH Key",
			"description": "A label for the SSH Key.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"displayName": "SSH Key",
			"name": "ssh_key",
			"type": "string",
			"default": "ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer",
			"description": "The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.\n\nAccepted formats:\n* ssh-dss\n* ssh-rsa\n* ecdsa-sha2-nistp\n* ssh-ed25519\n* sk-ecdsa-sha2-nistp256 (Akamai-specific)\n",
			"routing": {
				"send": {
					"property": "ssh_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Add SSH Key"
					]
				}
			}
		},
		{
			"displayName": "DELETE /profile/sshkeys/{sshKeyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete SSH Key"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/sshkeys/{sshKeyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get SSH Key"
					]
				}
			}
		},
		{
			"displayName": "PUT /profile/sshkeys/{sshKeyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "My SSH Key",
			"description": "A label for the SSH Key.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update SSH Key"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update SSH Key"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/tfa-disable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Tfa Disable"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Tfa Disable"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/tfa-enable",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Tfa Enable"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Tfa Enable"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/tfa-enable-confirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Tfa Confirm"
					]
				}
			}
		},
		{
			"displayName": "Tfa Code",
			"name": "tfa_code",
			"type": "string",
			"default": "213456",
			"description": "The Two Factor code you generated with your Two Factor secret. These codes are time-based, so be sure it is current.\n",
			"routing": {
				"send": {
					"property": "tfa_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Tfa Confirm"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Tfa Confirm"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/tokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Personal Access Tokens"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Personal Access Tokens"
					]
				}
			}
		},
		{
			"displayName": "POST /profile/tokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Create Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Expiry",
			"name": "expiry",
			"type": "string",
			"default": null,
			"description": "When this token should be valid until.  If omitted, the new token will be valid until it is manually revoked.\n",
			"routing": {
				"send": {
					"property": "expiry",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Create Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "linode-cli",
			"description": "This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Create Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Scopes",
			"name": "scopes",
			"type": "string",
			"default": "*",
			"description": "The scopes to create the token with.  These cannot be changed after creation, and may not exceed the scopes of the acting token. If omitted, the new token will have the same scopes as the acting token.\n",
			"routing": {
				"send": {
					"property": "scopes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Create Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Create Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "DELETE /profile/tokens/{tokenId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/tokens/{tokenId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "PUT /profile/tokens/{tokenId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "The date and time this token was created.\n",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Expiry",
			"name": "expiry",
			"type": "string",
			"default": "2018-01-01T13:46:32",
			"description": "When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with \"null\" as their expiry and will never expire unless revoked.\n",
			"routing": {
				"send": {
					"property": "expiry",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 123,
			"description": "This token's unique ID, which can be used to revoke it.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "linode-cli",
			"description": "This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Scopes",
			"name": "scopes",
			"type": "string",
			"default": "*",
			"description": "The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the <a target=\"_top\" href=\"https://github.com/linode/linode-cli\">Linode CLI</a>, require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure.\n",
			"routing": {
				"send": {
					"property": "scopes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "abcdefghijklmnop",
			"description": "The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned.\n",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Personal Access Token"
					]
				}
			}
		},
];
