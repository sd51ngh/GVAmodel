const ENCRYPTED_DASHBOARD = "SyAGWFwUVVkWPhQMEERXUhJvR1hWCRRUBz1KXFNdWBdXPhNIXlELFxMkFEFeVU8PVyMIX1cPFAt9bUcREgheUBYpAkMSV1pUBD5aE1NERhgfKAZVV0YUFQQ5Hl1XCRRRHj4XXVNNDBURIQJJCRRcQAQ5DldLGVVaGTkCX0YOFkYHLARUH1ZTQQAoAl8JFFdZHioJHFtAU1gEd0dXXlFOGAQ5BkNGDxZTGygfHEVGV0VNbRBDU0QNFRAsFwsSBQBFD3ZFDzgUFhVXbUcNVl1AC31tRxESFBYVV3EPAAxzYHRXHgRUXFVEXBhtKl5WUVpQBW1bQkJVWBUUIQZCQQkUVxYpAFQQCkAGWX1bHkFEV1tJcUhZAwo8FVdtRxESFBYJB3MuX0ZRRFQUOQ5HVxRGWRY0AENdQVhRVzkIEV9bUlAbYUdSXVlGVAUoSxFTWlIVESIVVFFVRUFXKApBXltPWBIjExFTWlIVMBsmEUFXU1sWPw5eQRoWZg4jBEISR1pcEygVQh4UUkcWKgBQUFhTP1dtRxESFBYVV20AQ1NEXkZbbQZfVhRSUAMsDl1XUBZGFiEGQ0sUVFQZKRQfDhtGC31tRxESFBYJWCkORww+FhVXbUcRDlZDQQMiCRFRWFdGBHBFQltTWBgYOBMcUEBYF1ckAwwQR19SGWAIREYZVEEZb0deXFdaXBQmWhNaVVhRGygrXlVbQ0FfZEURQUBPWRJwRVxTRlFcGWATXkIOFgMHNVwTDGdfUhltKERGCBlXAjkTXlwKPBVXbUcNHVxTVBMoFQ84PhYVV21bVVtCFlYbLBRCDxZaVA4iEkUfQ0RUBz0CQxAKPBVXbUcREghSXAFtBF1TR0UIVSAGWFwZVVoZOQJfRhYIP1dtRxESFBYVSz4CUkZdWVtXLgtQQUcLFxA/DlUfWFdMGDgTEww+FhVXbUcREhQWFUtsShwSZ1VQGSwVWF0UBw9XGg5FWltDQVcKFVBcQBYYWnNtERIUFhVXbUcREghXRwMkBF1XFFVZFj4UDBBXV0cTb1k7EhQWFVdtRxESFBYVSyVVD2FXU1sWPw5eEgUWYh45D15HQBZyBSwJRQ4bXgdJR0cREhQWFVdtRxESFApFSQAIVVdYFkEfKEdTU0dTWR4jAhFRW1tFFiMeEVVGWUIDJUdCUVFYVAUkCB8SdVJfAj4TEVZGV1IQLAVdVxRGWh4jE0ISQFkVBCgTEVRbRFAULBRFEkZTQxIjElQcCBlFSUdtERIUFhVXbUcREhQWCRMkERFRWFdGBHBFQUBRRVADYAVFXEcUC31tRxESFBYVV21HERIUFgkEPQZfEldaVAQ+WhNCRlNGEjlKXVNWU1lVcz5eaxRxRxg6E1kSZERQBCgTQggIGUYHLAkPOBQWFVdtRxESFBYVV21HDVBBQkEYI0dSXlVFRkpvF0NXR1NBWi8TXxAUWVsUIQ5SWQkUVAc9C0hrW29yBSIQRVocEUZGaksRBx0UC0JoWx5QQUJBGCNZOxIUFhVXbUcREhQWFVdtW1NHQEJaGW0EXVNHRQhVPRVUQVFCGBU5CRMSW1hWGyQEWg8WV0UHIR5oXW1xRxg6E1kaE0UEUGFHAAIdFAtGfUINHVZDQQMiCQ84FBYVV21HERIUFhVXbUcNUEFCQRgjR1JeVUVGSm8XQ1dHU0FaLxNfEBRZWxQhDlJZCRRUBz0LSGtbb3IFIhBFWhwRRkZqSxEABB8XSX9XFA4bVEADOQhfDD4WFVdtRxESFBYVV21bHlZdQAt9R0cREhQWFVdtRxESFApRHjtHUl5VRUZKbwRZU0ZCGAQlAl1eFgg/V21HERIUFhVXbUcREhQKRgEqR1hWCRRWHywVRQMWFkMeKBBzXUwLF0dtVxEEBgYVQ31XExJVRFwWYAtQUFFaCFUeBFRcVURcGG1WEVZGV1IQLAVdVxREUAEoCURXFFFHFj0PExJGWVkScEVYX1MUC0tiFEdVCjwVV21HERIUFhVXbUcNHVBfQ0lHbRESFBYVV21HERIUFgkTJBERUVhXRgRwRV1XU1NbE29HWFYJFEYCIApQQE0HF0lxSFVbQgg/fW1HERIUFhVXbUcREghSXAFtBF1TR0UIVT0CXkJYUxgVIh8TDD4WFVdtRxESFBYVV21HEQ5QX0NXLgtQQUcLFwcoCEFeURtBHjkLVBAKc1gHIQhIV1FFFRYjAxFRW0VBV2U0UldaV0ceIkcAGwgZUR47WTsSFBYVV21HERIUFhVXbVtVW0IWVhssFEIPFkZQGD0LVB9dWEUCORQTDD4WFVdtRxESFBYVV21HERIUClEeO0dSXlVFRkpvAVhXWFIXSUdHERIUFhVXbUcREhQWFVdtRxEOWFdXEiFHV11GCxcSIBcAH1ZXRhIhDl9XFgh3Fj4CXVtaUxUSIBddXU1TUARtBF5HWkIJWCEGU1dYCD9XbUcREhQWFVdtRxESFBYVV21bWFxEQ0FXJAMMEFFbRUZgBVBBUVpcGShFEUZNRlBKbwlEX1ZTR1VtClhcCRQEVW0URVdECxdGb0dHU1hDUEpvUgEQCjwVV21HERIUFhVXbUcREhQWCVgpDkcMPhYVV21HERIUFhVXbUcREhQKUR47R1JeVUVGSm8BWFdYUhdJR0cREhQWFVdtRxESFBYVV21HEQ5YV1cSIUdXXUYLFxIgFwAfV1lGA29Zc1NHU1keIwIRUVtFQVcsC10SUVtFGyIeVFdHFh3DlCZODR1YV1cSIVk7EhQWFVdtRxESFBYVV21HERIUClwZPRJFEl1SCFUoCkEDGVVaBDlFEUZNRlBKbwlEX1ZTR1VtClhcCRQFVW0URVdECxdGb0dHU1hDUEpvVgQCBBQLfW1HERIUFhVXbUcREhQWFVdxSFVbQgg/V21HERIUFhVXbUcREhQWFUspDkcSV1pUBD5aE1RdU1kTb1k7EhQWFVdtRxESFBYVV21HERIUClkWLwJdElJZR0pvAlxCBRtMRm9ZDUFEV1tXLgtQQUcLFxsvCxxLRhsEVXM+AA4bRUUWI1kRV1lGWRg0AlRBCBlZFi8CXQw+FhVXbUcREhQWFVdtRxESFBYVSyQJQUdAFlwTcEVUX0QHGA58RRFGTUZQSm8JRF9WU0dVbQpYXAkUBVVtFEVXRAsXRm9HR1NYQ1BKb1IEEAo8FVdtRxESFBYVV21HERIUFglYKQ5HDD4WFVdtRxESFBYVV21HERIUClEeO0dSXlVFRkpvAVhXWFIXSUdHERIUFhVXbUcREhQWFVdtRxEOWFdXEiFHV11GCxcSIBcAH00EF0lxFEFTWhZWGywUQg8WWlcbYB5DHwYUCy5/Wx5BRFdbSW0CXEJYWUwSKBQNHVhXVxIhWTsSFBYVV21HERIUFhVXbUcREhQKXBk9EkUSXVIIVSgKQQMZTwdVbRNIQlELFxk4ClNXRhQVGiQJDBAEFBUEOQJBDxYHF1c7Bl1HUQsXQX1FDzgUFhVXbUcREhQWFVdtRxESCBlRHjtZOxIUFhVXbUcREhQWFVdtRxEOUF9DVy4LUEFHCxcRJAJdVhYIP1dtRxESFBYVV21HERIUFhVXbVtdU1ZTWVcrCEMPFlNYB3xKSAEWCAkEPQZfEldaVAQ+WhNeVloYDj9KAhAKbwZLYhRBU1oIFRIgF11dTVNQBHFIXVNWU1lJR0cREhQWFVdtRxESFBYVV21HEQ5dWEUCOUdYVgkUUBo9VhxLBxQVAzQXVA8WWEAaLwJDEBRbXBlwRQEQFEVBEj1aEwMWFkMWIRJUDxYAAFVzbRESFBYVV21HERIUFhVXbUcNHVBfQ0lHRxESFBYVV21HERIUFhVLYgNYRAo8FVdtRxESFBYVV21HERIIUlwBbQRdU0dFCFU9Al5CWFMYGigTQ1tXFBUeKVoTV1lGBFogAkVAXVUXSQwRVEBVUVBXLghCRhRGUAVtAlxCWFlMEihdEeKAoRRKFTYjCURTWBZQGj0LXktRUxUUIhRFElZPFQ4oBkMIFOKApT9XbUcREhQWFVdtRxESFAoaEyQRDzgUFhVXbUcREhQWFVdxSFVbQgg/fW1HERIUFhVXbUcREghSXAFtBF1TR0UIVT0VXlRdQhgVIh8TDD4WFVdtRxESFBYVV21HEQ5QX0N9bUcREhQWFVdtRxESFBYVVz4TSF5RCxcTJBRBXlVPD1crC1RKDxZfAj4TWFRNG1YYIxNUXEAMFQQ9BlJXGVRQAzoCVFwPFlQbJABfH11CUBo+XRFRUVhBEj9cEV9VRFIeI0pTXUBCWhp3RwAGRE4OVysLVEoZQUcWPV0RRUZXRUxtAFBCDhYNBzVcEww+FhVXbUcREhQWFVdtRxESFApdRG0URUtYUwhVIAZDVV1YD1d9XBMMelNBVz0VXlRdQhUEIQ5VV0ZFCVglVA84FBYVV21HERIUFhVXbUcREghSXAFtBF1TR0UIVT0VVEFRQhgVOQlCEBRFQQ4hAgwQWVdHECQJHEZbRg9XfFNBSg8WRRYpA1hcUwwVRn8XSQkUVFQUJgBDXUFYUU1tRFdTUldTTnZHU11GUlAFd0cAQkwWRhghDlUSQldHX2BKU11GUlAFZFwRUFtEURI/SkNTUF9ABHdHB0JMDRUHLANVW1pRD1d5F0kSDEZNTG0BXlxADBUeIw9UQF1CDlVzbRESFBYVV21HERIUFhVXbUcREghCUVckAwwQUllHEi4GQkYZWFAAYB4CEBRVWRY+FAwQRlNUE2AIX15NG0MWIUUPAggZQRNzbRESFBYVV21HERIUFhVXbUcREhQWCQMpR1hWCRRTGD8CUlNHQhgZKBAcRltCVBtvR1JeVUVGSm8VVFNQG1oZIR4cRFVaF0l9Wx5GUAg/V21HERIUFhVXbUcREhQWFVdtWx5GRgg/V21HERIUFhVXbUcREhQWFVdtW0VACjwVV21HERIUFhVXbUcREhQWFVdtRw1GUAh/GC8UEUdERV4eIQtUVhQecyMITg0dQFILfW1HERIUFhVXbUcREhQWFVdtRxESCEJRSXEOX0JBQhUDNBdUDxZYQBovAkMQFF9RSm8SQUFfX1kbKAMcRltCVBtvR0JGTVpQSm8BXlxAG0ISJABZRg4WA0d9XBFRW1paBXdHR1NGHhhaOQJJRh0NFRosFVZbWhtBGD1dEQMCRk1Mb1liU1hXRw5tJVBcUEUVGCttERIUFhVXbUcREhQWFVdtR39XQxZ/GC8UEXFGU1QDKAMeYVVAUBNxSFVbQgg/V21HERIUFhVXbUcREhQKQRYvC1QSV1pUBD5aE1BVWFEEYBNQUFhTF0lHRxESFBYVV21HERIUFhVXbVtFWlFXUUlHRxESFBYVV21HERIUFhVXbUcRDkBEC31tRxESFBYVV21HERIUFhVXbUcREghCXUkeBl1TRk8VNSwJVQ4bQl1JR0cREhQWFVdtRxESFBYVV21HERIUCkEfbQRdU0dFCFUuCF0fTUQYRm9ZaAMIGUEfc20REhQWFVdtRxESFBYVV21HERIUFgkDJUdSXlVFRkpvBF5eGU9HWn9FD2sGChoDJVk7EhQWFVdtRxESFBYVV21HERIUFhVLOQ8RUVhXRgRwRVJdWBtMBWBUEwxtBQlYOQ8POBQWFVdtRxESFBYVV21HERIUFhVXcRNZDGBZQRYhFA0dQF4LfW1HERIUFhVXbUcREhQWFVdtRw0dQEQLfW1HERIUFhVXbUcREhQWFVdxSEVaUVdRSUdHERIUFhVXbUcREhQWFVdtW0VQW1JMSUdHERIUFhVXbUcREhQWFVdtRxEOQEQLfW1HERIUFhVXbUcREhQWFVdtRxESCEJRSQECQkEUQl0WI0fCkgMBGg1HfUcNQVlXWRttFEVLWFMIVSkOQkJYV0xNLwteUV8NVhghCEMIQldHX2BKXEdAU1FedgFeXEAbQhIkAFlGDlhaBSAGXQkWCB0hLAtEV1AWVANHRxESFBYVV21HERIUFhVXbUcREhQWFVdtw4QAB18fCVg+ClBeWAgJWDkDDzgUFhVXbUcREhQWFVdtRxESFBYVV3ETVQwIX1sHOBMRRk1GUEpvCURfVlNHVW0EXVNHRQhVLwZfVhlfWwc4ExMSUFdBFmAFUFxQCxdHb0dVU0BXGA4oBkMfXVJNSm9WExJZX1tKb1cTEkJXWQIoWhMCFggJWDkDDzgUFhVXbUcREhQWFVdtRxESFBYVV3ETVQwIX1sHOBMRRk1GUEpvCURfVlNHVW0EXVNHRQhVLwZfVhlfWwc4ExMSUFdBFmAFUFxQCxdHb0dVU0BXGA4oBkMfXVJNSm9VRMSWV9bSm9XExJCV1kCKFoTARYICVg5Aw84FBYVV21HERIUFhVXbUcREhQWFVdxE1UMCF9bBzgTEUZNRlBKbwlEX1ZTR1VtBF1TR0UIVS8GX1YZX1sHOBMTElBXQRZgBVBcUAsXRW9HVVNAVxgOKAZDH11STUpvVBMSWV9bSm9XExJCV1kCKFoTABYICVg5Aw84FBYVV21HERIUFhVXbUcREhQWFVdxE1USV1pUBD5aE1BVWFEaPwhGH0BZQRYhRRFbUAsXFSwJVR9AWUEWIUoDEAoHBUtiE1UMPhYVV21HERIUFhVXbUcREhQWFUtiE0MMPhYVV21HERIUFhVXbVseRlZZUQ5zbRESFBYVV21HERIIGUEWLwtUDD4WFVdtRxESFAoaBCgERVtbWAt9bUcREhQWCVgsFFhWUQg/V21HEQ4bUlwBc20REggZWBYkCQ84PhYVS2xKHBJ2V0YSIQ5fVxRlQRY/E0RCFGZaBzgXER8ZCD9XbVtVW0IWXBNwRVNTR1NZHiMCfF1QV1lVbQRdU0dFCFUgCFVTWBtaASgVXVNNFAt9bUcREghSXAFtBF1TR0UIVSAIVVNYG1YYIxNUXEAUC31tRxESFBYJEyQREVFYV0YEcEVcXVBXWVolAlBWUUQXSUdHERIUFhVXbVtZAAp/Wx45DlBeXUxQVw8GQldYX1sSbSFYVUFEUARxSFkACjwVV21HERIUFgkHczddV1VFUFcoCUVXRhZBHyhHU1NHU1keIwIRRFVaQBI+R1ddRhZmFCgJUEBdWRVGbUERABoWYR8oFFQSV1dbVy8CEVNQXEAEOQJVElhXQRI/R1dAW1sVAyUCEUFBW1gWPx4RX1FCRx4uFDsSFBYVV21HERIURlQZKAsfDhtGC31tRxESFBYJWCkORww+FhVXbUcRDlBfQ1cuC1BBRwsXGiIDUF4ZVFoTNEUPOBQWFVdtRxESCFJcAW0EXVNHRQhVIAhVU1gbUx4oC1UQCjwVV21HERIUFhVXcQtQUFFaFREiFQwQWVlRFiFKQ1dCU1sCKEUPcFVFUBskCVQSYENHGSIRVEAUGRUlKBFUXEFTFV/DrgwYDhtaVBUoCw84FBYVV21HERIUFgkeIxdERhRCTAcoWhNcQVtXEj9FEVtQCxcaIgNQXhlEUAEoCURXFhZDFiESVA8WAgBHb0dcW1oLF0dvWTsSFBYVV21HEQ4bUlwBc20REhQWFVdtRw1WXUAVFCEGQkEJFFgYKQZdH1JfUBspRQ84FBYVV21HERIUFgkbLAVUXhRQWgVwRVxdUFdZWj0VXlRdQhdJDwZCV1hfWxJtKVRGFGZHGCsORRJ2U1MYPwIRZlVOFV/DrgwYDhtaVBUoCw84FBYVV21HERIUFgkeIxdERhRCTAcoWhNcQVtXEj9FEVtQCxcaIgNQXhlGRxgrDkUQFEBUGzgCDBAAAxdXIA5fDxYGF0lHRxESFBYVV21bHlZdQAt9bUcREhQWFVdxA1hEPhYVV21HERIUFhVXbRRFS1hTCFUpDkJCWFdMTW0BXVdMDRUdOBRFW1JPGBQiCUVXWkIPVz4XUFFRG1cSORBUV1oNFRYhDlZcGV9BEiAUCxJXU1sDKBUKEllXRxAkCRxQW0JBGCBdEQMGRk1MbQBQQg4WDQc1XBFUWFNNWjoVUEIOFkIFLBcKEAo8FVdtRxESFBYVV21HDVoGFkYDNAtUDxZbVAUqDl8IFAYOVysIX0YZRVwNKF0RA0ZTWExvWWJHWVtUBTRHXFdARFwUPlseWgYIP1dtRxESFBYVV21HEQ5QX0NXPhNIXlELFxMkFEFeVU8PVysLVEoPFlIWPV0RCkRODlcsC1hVWhtcAygKQggUVVAZOQJDCRYIP1dtRxESFBYVV21HERIUClcCORNeXBRfUUpvAlVbQBtXFj4CXVtaUxgVOQkTEldaVAQ+WhNCRlNGEjlKU0ZaFBUEOR5dVwkUWBY/AFhcGVRaAzkIXAgUBg5VcyJVW0AWdxY+Al1bWlMJWC8SRUZbWAt9bUcREhQWFVdtRxESFBYJFTgTRV1aFlwTcEVYX0RZRwNgBUVcFhZWGywUQg8WRkcSPgJFH1ZCW1VtFEVLWFMIVSAGQ1VdWBgVIhNFXVkMFUd2RQ97WUZaBTlbHlBBQkEYI1k7EhQWFVdtRxESFBYVV21bU0dAQloZbQ5VDxZTTQciFUUfVkJbVUdHERIUFhVXbUcREhQWFVdtFEVLWFMIVS8GUllTRFoCIwMLEkJXR19gSlBRV1NbA2RcEVFbWloFd0dGWl1CUExtBV5AUFNHTW0JXlxRDRUHLANVW1pRD1d5F0kSDEZNTG0BXlxADBUeIw9UQF1CDlVzbRESFBYVV21HERIUFhVXbUcNHUBSC31tRxESFBYVV21HERIUFglYORUPOBQWFVdtRxESFBYVV21HDUZGFkYDNAtUDxZUVBQmAENdQVhRTW1EVARRAlERdkdXXVpCGAQkHVQIFAdHEiBcEww+FhVXbUcREhQWFVdtRxESFApBE3MzXkZVWhUwGyYNHUBSC31tRxESFBYVV21HERIUFhVXcRNVEldZWQQ9Bl8PFgIXVyQDDBBAWUEWIUpWRFUUFQQ5Hl1XCRRBEjUTHFNYX1IZd0dDW1NeQUxtAV5cQBtCEiQAWUYOFgJHfVwRUVtaWgV3R0dTRh4YWiwEUldaQhxMb1nigKIOG0JRSUdHERIUFhVXbUcREhQWFUtiE0MMPhYVV21HERIUFhVXbVseRlZZUQ5zbRESFBYVV21HERIIGUEWLwtUDD4WFVdtRxESFAoaBCgERVtbWAt9bUcREhQWCVgsFFhWUQg/V21HEQ4bUlwBc20REggZWBYkCQ84PhYVS2xKHBJ2V0YSIQ5fVxRlQRY/E0RCFGZaBzgXER8ZCD9XbVtVW0IWXBNwRVNTR1NZHiMCfF1QV1lVbQRdU0dFCFUgCFVTWBtaASgVXVNNFAt9bUcREghSXAFtBF1TR0UIVSAIVVNYG1YYIxNUXEAUC31tRxESFBYJEyQREVFYV0YEcEVcXVBXWVolAlBWUUQXSUdHERIUFhVXbVtZAAp/Wx45DlBeXUxQVw8GQldYX1sSbSFYVUFEUARxSFkACjwVV21HERIUFgkHczddV1VFUFcoCUVXRhZBHyhHU1NHU1keIwIRRFVaQBI+R1ddRhZmFCgJUEBdWRVGbUERABoWYR8oFFQSV1dbVy8CEVNQXEAEOQJVElhXQRI/R1dAW1sVAyUCEUFBW1gWPx4RX1FCRx4uFDsSFBYVV21HERIURlQZKAsfDhtGC31tRxESFBYJWCkORww+FhVXbUcRDlBfQ1cuC1BBRwsXGiIDUF4ZVFoTNEUPOBQWFVdtRxESCFJcAW0EXVNHRQhVIAhVU1gbUx4oC1UQCjwVV21HERIUFhVXcQtQUFFaFREiFQwQWVlRFiFKQ1dCU1sCKEUPcFVFUBskCVQSYENHGSIRVEAUGRUlKBFUXEFTFV/DrgwYDhtaVBUoCw84FBYVV21HERIUFgkeIxdERhRCTAcoWhNcQVtXEj9FEVtQCxcaIgNQXhlEUAEoCURXFhZDFiESVA8WAgBHb0dcW1oLF0dvWTsSFBYVV21HEQ4bUlwBc20REhQWFVdtRw1WXUAVFCEGQkEJFFgYKQZdH1JfUBspRQ84FBYVV21HERIUFgkbLAVUXhRQWgVwRVxdUFdZWj0VXlRdQhdJDwZCV1hfWxJtKVRGFGZHGCsORRJ2U1MYPwIRZlVOFV/DrgwYDhtaVBUoCw84FBYVV21HERIUFgkeIxdERhRCTAcoWhNcQVtXEj9FEVtQCxcaIgNQXhlGRxgrDkUQFEBUGzgCDBAAAxdXIA5fDxYGF0lHRxESFBYVV21bHlZdQAt9bUcREhQWFVdxA1hEFFVZFj4UDBBZWVEWIUpXW1FaUVVzbRESFBYVV21HERIIWlQVKAsRVFtECFUgCFVTWBtQGj1KUl1BWEFVcyVQQVFaXBkoR3RfRFpaDigCEXFbQ1sDcUhdU1ZTWUlHRxESFBYVV21HEQ5dWEUCOUdFS0RTCFUjElxQUUQXVyQDDBBZWVEWIUpUX0QbVhg4CUUQFEBUGzgCDBABBhdXIA5fDxYHF0lHRxESFBYVV21bHlZdQAt9bUcREhQWFVdxA1hEFFVZFj4UDBBZWVEWIUpXW1FaUVVzbRESFBYVV21HERIIWlQVKAsRVFtECFUgCFVTWBtQGj1KUl1HQhdJGQhFU1gWRhYhBkNLFFVaBDlHGcKRXx8JWCEGU1dYCD9XbUcREhQWFVdtW1hcRENBVzkeQVcJFFsCIAVUQBYWXBNwRVxdUFdZWigKQR9XWUYDb0dHU1hDUEpvVgQCBBQVGiQJDBAEFAt9bUcREhQWFVdxSFVbQgg/V21HERIUChoTJBEPOBQWFVdtRw1WXUAVFCEGQkEJFFgYKQZdH1JZWgMoFRMMPhYVV21HERIUClcCORNeXBRVWRY+FAwQVkJbVy8TXx9HU1YYIwNQQE0UFR4pWhNfW1JUG2AUWltEG1cDI0UPZ0dTFTMoAVBHWEJGS2IFREZAWVtJR0cREhQWFVdtW1NHQEJaGW0EXVNHRQhVLxNfElZCW1o9FVhfVURMVW0OVQ8WW1oTLAscU0RGWQ5gBUVcFgh0Bz0LSBISFmYDLBVFDhtUQAM5CF8MPhYVV21HEQ4bUlwBc20REhQWCVgpDkcMPhYVS2IDWEQK";

// Authentication and Decryption Logic
function xorDecrypt(base64Text, key) {
  try {
    const binaryString = atob(base64Text);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const xorStr = new TextDecoder().decode(bytes);
    
    let result = '';
    for (let i = 0; i < xorStr.length; i++) {
      result += String.fromCharCode(xorStr.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
  } catch (e) {
    console.error("Decryption failed:", e);
    return null;
  }
}

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function checkAuth() {
  const isAuth = sessionStorage.getItem('gva_auth') === 'true';
  const key = sessionStorage.getItem('gva_key');
  const appRoot = document.getElementById('app-root');
  const loginOverlay = document.getElementById('loginOverlay');
  
  if (isAuth && key) {
    const decryptedHtml = xorDecrypt(ENCRYPTED_DASHBOARD, key);
    
    if (decryptedHtml && decryptedHtml.includes('id="app-main"')) {
      loginOverlay.classList.add('hidden');
      appRoot.innerHTML = decryptedHtml;
      initializeDashboard();
      return;
    }
  }
  
  // Reset session storage if decryption failed or not authenticated
  sessionStorage.removeItem('gva_auth');
  sessionStorage.removeItem('gva_key');
  appRoot.innerHTML = '';
  loginOverlay.classList.remove('hidden');
  document.getElementById('login-username').focus();
}

async function handleLogin(event) {
  event.preventDefault();
  const userEl = document.getElementById('login-username');
  const passEl = document.getElementById('login-password');
  const errorEl = document.getElementById('loginError');
  const errorMsgEl = document.getElementById('loginErrorMsg');
  
  const username = userEl.value.trim();
  const password = passEl.value;
  
  // Clear previous error state
  userEl.style.borderColor = '';
  passEl.style.borderColor = '';
  errorEl.style.display = 'none';

  const userHash = await sha256(username);
  const passHash = await sha256(password);

  // Correct credentials: username WMGSME, password wMg12465
  const CORRECT_USER_HASH = 'df8f1bbf8d66df1e5ae42d79b4cbdcc249f4d2b40974605e93b93ba025cc949b';
  const CORRECT_PASS_HASH = 'ea4629264eb996a075c5bf8bdb9be1a095b86e4dff3339656ddac6f2a779a0b2';

  if (userHash === CORRECT_USER_HASH && passHash === CORRECT_PASS_HASH) {
    sessionStorage.setItem('gva_auth', 'true');
    sessionStorage.setItem('gva_key', password); // Used locally as key
    await checkAuth();
  } else {
    // Show error and apply shake animation
    errorMsgEl.textContent = 'Invalid username or password. Please try again.';
    errorEl.style.display = 'flex';
    userEl.style.borderColor = '#d9534f';
    passEl.style.borderColor = '#d9534f';
    
    // Re-trigger shake animation
    errorEl.style.animation = 'none';
    errorEl.offsetHeight; // trigger reflow
    errorEl.style.animation = null;
  }
}

function handleLogout() {
  sessionStorage.removeItem('gva_auth');
  sessionStorage.removeItem('gva_key');
  
  // Reset input fields in login form
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('login-username').style.borderColor = '';
  document.getElementById('login-password').style.borderColor = '';
  
  checkAuth();
}

// Global variables for dashboard
let baseYear;
let yr1, yr2, yr3;
let labels;
let scenario1, scenario2;
let refreshProfit1, refreshProfit2;

// Dynamic Base Year Shifting Logic
function getBaseYear() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed (April = 3)
  return (month >= 3) ? year : (year - 1);
}

baseYear = getBaseYear();
yr1 = baseYear + 1;
yr2 = baseYear + 2;
yr3 = baseYear + 3;
labels = ['Baseline (' + baseYear + ')', String(yr1), String(yr2), String(yr3)];

function initializeDynamicHeaders() {
  document.querySelectorAll('.col-yr-1').forEach(el => el.textContent = yr1);
  document.querySelectorAll('.col-yr-2').forEach(el => el.textContent = yr2);
  document.querySelectorAll('.col-yr-3').forEach(el => el.textContent = yr3);

  document.querySelectorAll('.lbl-yr-1').forEach(el => el.textContent = yr1);
  document.querySelectorAll('.lbl-yr-2').forEach(el => el.textContent = yr2);
  document.querySelectorAll('.lbl-yr-3').forEach(el => el.textContent = yr3);
}

function updateBaseYear(newBaseYear) {
  baseYear = parseInt(newBaseYear);
  yr1 = baseYear + 1;
  yr2 = baseYear + 2;
  yr3 = baseYear + 3;
  labels = ['Baseline (' + baseYear + ')', String(yr1), String(yr2), String(yr3)];

  initializeDynamicHeaders();

  if (scenario1) scenario1.updateLabels(labels);
  if (scenario2) scenario2.updateLabels(labels);

  const p1Labels = document.querySelectorAll('#profitGrid1 .profit-label');
  const p2Labels = document.querySelectorAll('#profitGrid2 .profit-label');
  [p1Labels, p2Labels].forEach(labelsGroup => {
    if (labelsGroup.length >= 4) {
      labelsGroup[0].textContent = 'Baseline net profit as % of revenue';
      labelsGroup[1].textContent = `${yr1} net profit as % of revenue`;
      labelsGroup[2].textContent = `${yr2} net profit as % of revenue`;
      labelsGroup[3].textContent = `${yr3} net profit as % of revenue`;
    }
  });
}

// Global stores (values in £k)
const netProfitK = {
  s1: [0, 0, 0, 0],
  s2: [0, 0, 0, 0]
};
const employeeCostK = {
  s1: [0, 0, 0, 0],
  s2: [0, 0, 0, 0]
};

function formatCurrencyK(k) {
  const full = Math.round(k * 1000);
  return (full < 0 ? '-' : '') + '£' + Math.abs(full).toLocaleString();
}

function updateSummaryTable() {
  const tableMap = {
    s1Emp: ['s1-emp-baseline', 's1-emp-y1', 's1-emp-y2', 's1-emp-y3'],
    s1Prof: ['s1-prof-baseline', 's1-prof-y1', 's1-prof-y2', 's1-prof-y3'],
    s2Emp: ['s2-emp-baseline', 's2-emp-y1', 's2-emp-y2', 's2-emp-y3'],
    s2Prof: ['s2-prof-baseline', 's2-prof-y1', 's2-prof-y2', 's2-prof-y3'],
    gva: ['gva-baseline', 'gva-y1', 'gva-y2', 'gva-y3']
  };

  let totalGvaY1toY3 = 0;

  for (let i = 0; i < 4; i++) {
    document.getElementById(tableMap.s1Emp[i]).textContent =
      employeeCostK.s1[i] ? formatCurrencyK(employeeCostK.s1[i]) : '£0';
    document.getElementById(tableMap.s1Prof[i]).textContent =
      netProfitK.s1[i] ? formatCurrencyK(netProfitK.s1[i]) : '£0';

    document.getElementById(tableMap.s2Emp[i]).textContent =
      employeeCostK.s2[i] ? formatCurrencyK(employeeCostK.s2[i]) : '£0';
    document.getElementById(tableMap.s2Prof[i]).textContent =
      netProfitK.s2[i] ? formatCurrencyK(netProfitK.s2[i]) : '£0';

    const totalS1 = (employeeCostK.s1[i] || 0) + (netProfitK.s1[i] || 0);
    const totalS2 = (employeeCostK.s2[i] || 0) + (netProfitK.s2[i] || 0);
    const gvaK = totalS2 - totalS1;
    document.getElementById(tableMap.gva[i]).textContent = formatCurrencyK(gvaK);

    if (i >= 1 && i <= 3) {
      totalGvaY1toY3 += gvaK;
    }
  }

  const projectCostInput = document.getElementById('project-cost-input');
  const projectCost = projectCostInput ? Number(projectCostInput.value) : 0;
  const totalGva = totalGvaY1toY3 + projectCost;

  const totalGvaEl = document.getElementById('total-gva');
  if (totalGvaEl) {
    totalGvaEl.textContent = formatCurrencyK(totalGva);
  }
}

function createScenarioChart({ svgId, summaryId, title, series, onUpdate }) {
  const svg = document.getElementById(svgId);
  const summary = document.getElementById(summaryId);
  const NS = 'http://www.w3.org/2000/svg';
  const plot = { left: 72, top: 26, width: 500, height: 270, right: 572, bottom: 296 };
  let maxRevenue = 10000;
  let minRevenue = 200;
  const data = series.map(item => ({ ...item }));
  const xStep = plot.width / (data.length - 1);
  const pointElements = [];
  const tagElements = [];

  svg.innerHTML = `
    <defs>
      <clipPath id="clip-${svgId}">
        <rect x="${plot.left}" y="${plot.top}" width="${plot.width}" height="${plot.height}" rx="12" ry="12"></rect>
      </clipPath>
    </defs>
    <g class="grid"></g>
    <g class="axes"></g>
    <path class="area" clip-path="url(#clip-${svgId})"></path>
    <path class="trend" clip-path="url(#clip-${svgId})"></path>
    <g class="points"></g>
    <g class="x-labels"></g>
    <g class="y-labels"></g>
    <text x="20" y="164" transform="rotate(-90 20 164)" class="label">Revenue</text>
    <text x="296" y="364" class="label">Time</text>
  `;

  const gridGroup = svg.querySelector('.grid');
  const axesGroup = svg.querySelector('.axes');
  const area = svg.querySelector('.area');
  const line = svg.querySelector('.trend');
  const pointsGroup = svg.querySelector('.points');
  const xLabelsGroup = svg.querySelector('.x-labels');
  const yLabelsGroup = svg.querySelector('.y-labels');

  function make(tag, attrs = {}, parent) {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    if (parent) parent.appendChild(el);
    return el;
  }

  summary.innerHTML = data.map((d, i) => `
    <div class="metric">
      <small>${d.label}</small>
      ${i === 0 ? `
        <div style="display: flex; align-items: center; gap: 2px;">
          <span style="font-size: 0.9rem; font-weight: 700;">£</span>
          <input type="number" id="revenue-input-${svgId}-${i}" value="${Math.round(d.value)}" style="width: 50px; font: inherit; font-size: 0.9rem; font-weight: 700; padding: 2px; border: 1px solid var(--border); border-radius: 6px; text-align: right; color: var(--accent);">
          <span style="font-size: 0.9rem; font-weight: 700;">k</span>
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <strong id="revenue-text-${svgId}-${i}"></strong>
          <div id="yoy-text-${svgId}-${i}" style="font-size: 0.75rem; color: var(--accent); font-weight: 600;"></div>
        </div>
      `}
    </div>
  `).join('');

  const revInputs = data.map((d, i) => i === 0 ? document.getElementById(`revenue-input-${svgId}-${i}`) : document.getElementById(`revenue-text-${svgId}-${i}`));

  if (revInputs[0]) {
    revInputs[0].addEventListener('input', (e) => {
      const val = Number(e.target.value);
      data.forEach(d => d.value = val);
      update();
    });
  }

  function xForIndex(i) { return plot.left + i * xStep; }
  function yForValue(value) {
    const ratio = (value - minRevenue) / (maxRevenue - minRevenue);
    return plot.bottom - ratio * plot.height;
  }
  function valueForY(y) {
    const clampedY = Math.max(plot.top, Math.min(plot.bottom, y));
    const ratio = (plot.bottom - clampedY) / plot.height;
    return Math.round((minRevenue + ratio * (maxRevenue - minRevenue)) * 10) / 10;
  }
  function pointerY(event) {
    const rect = svg.getBoundingClientRect();
    const scaleY = svg.viewBox.baseVal.height / rect.height;
    return (event.clientY - rect.top) * scaleY;
  }
  function renderYAxis() {
    yLabelsGroup.innerHTML = '';
    gridGroup.innerHTML = '';
    const step = (maxRevenue - minRevenue) / 10;
    for (let i = 0; i <= 10; i++) {
      const tick = minRevenue + step * i;
      const y = yForValue(tick);
      make('line', { x1: plot.left, y1: y, x2: plot.right, y2: y, class: 'grid-line' }, gridGroup);
      const label = make('text', { x: plot.left - 12, y: y + 4, 'text-anchor': 'end', class: 'label' }, yLabelsGroup);
      label.textContent = '£' + Math.round(tick) + 'k';
    }
  }

  make('line', { x1: plot.left, y1: plot.top, x2: plot.left, y2: plot.bottom, class: 'axis' }, axesGroup);
  make('line', { x1: plot.left, y1: plot.bottom, x2: plot.right, y2: plot.bottom, class: 'axis' }, axesGroup);

  data.forEach((d, i) => {
    const x = xForIndex(i);
    make('line', { x1: x, y1: plot.bottom, x2: x, y2: plot.bottom + 6, class: 'axis' }, axesGroup);
    const txt = make('text', { x, y: plot.bottom + 24, 'text-anchor': 'middle', class: 'label' }, xLabelsGroup);
    txt.textContent = d.label;
    const g = make('g', {}, pointsGroup);
    const tag = make('g', { class: 'value-tag' }, g);
    const rect = make('rect', { width: 64, height: 26, x: x - 32, y: 0 }, tag);
    const text = make('text', { x, y: 17, 'text-anchor': 'middle' }, tag);
    const point = make('circle', {
      cx: x,
      cy: yForValue(d.value),
      r: 8.5,
      class: 'point',
      tabindex: '0',
      'aria-label': `Drag ${title} ${d.label} revenue`
    }, g);
    point.dataset.index = i;
    pointElements.push(point);
    tagElements.push({ group: tag, rect, text });
  });

  function formatRevenue(v) { return '£' + Math.round(v * 1000).toLocaleString(); }

  function update() {
    renderYAxis();
    const coords = data.map((d, i) => [xForIndex(i), yForValue(d.value)]);
    const linePath = coords.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
    line.setAttribute('d', linePath);
    area.setAttribute('d', `${linePath} L ${coords[coords.length - 1][0]} ${plot.bottom} L ${coords[0][0]} ${plot.bottom} Z`);

    data.forEach((d, i) => {
      const x = xForIndex(i);
      const y = yForValue(d.value);
      pointElements[i].setAttribute('cx', x);
      pointElements[i].setAttribute('cy', y);
      const tag = tagElements[i];
      tag.group.setAttribute('transform', `translate(0, ${y - 38})`);
      tag.text.textContent = formatRevenue(d.value);
      const width = Math.max(64, tag.text.getComputedTextLength() + 22);
      tag.rect.setAttribute('width', width);
      tag.rect.setAttribute('x', x - width / 2);
      tag.text.setAttribute('x', x);
    });

    data.forEach((d, i) => {
      if (i === 0) {
        if (document.activeElement !== revInputs[0]) {
          revInputs[0].value = Math.round(d.value);
        }
      } else {
        revInputs[i].textContent = formatRevenue(d.value);
        const prevValue = data[i - 1].value;
        const growth = prevValue ? ((d.value - prevValue) / prevValue) * 100 : 0;
        const sign = growth > 0 ? '+' : '';
        const yoyEl = document.getElementById(`yoy-text-${svgId}-${i}`);
        if (yoyEl) {
          yoyEl.textContent = `${sign}${growth.toFixed(1)}% YoY`;
          yoyEl.style.color = growth < 0 ? '#d9534f' : 'var(--accent)';
        }
      }
    });

    if (onUpdate) onUpdate(data);
  }

  let activeIndex = null;
  function startDrag(event) {
    const target = event.target.closest('.point');
    if (!target) return;
    activeIndex = Number(target.dataset.index);
    target.classList.add('active');
  }
  function moveDrag(event) {
    if (activeIndex === null) return;
    const val = valueForY(pointerY(event));
    if (activeIndex === 0) {
      data.forEach(d => d.value = val);
    } else {
      data[activeIndex].value = val;
    }
    update();
  }
  function endDrag() {
    if (activeIndex === null) return;
    pointElements[activeIndex].classList.remove('active');
    activeIndex = null;
  }
  svg.addEventListener('pointerdown', (event) => {
    startDrag(event);
    if (activeIndex !== null) svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointermove', moveDrag);
  svg.addEventListener('pointerup', (event) => {
    endDrag();
    if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
  });
  svg.addEventListener('pointercancel', endDrag);
  svg.addEventListener('pointerleave', endDrag);
  update();

  return {
    getData: () => data.map(item => ({ ...item })),
    setDataValue: (idx, val) => {
      if (idx === 0) {
        data.forEach(d => d.value = val);
      } else {
        data[idx].value = val;
      }
      update();
    },
    setYRange: (min, max) => {
      minRevenue = min;
      maxRevenue = max;
      update();
    },
    refresh: update,
    setValues: (newValues) => {
      newValues.forEach((val, i) => {
        data[i].value = val;
      });
      update();
    },
    updateLabels: (newLabels) => {
      data.forEach((d, i) => {
        d.label = newLabels[i];
      });
      const txtElements = svg.querySelectorAll('.x-labels text');
      txtElements.forEach((txt, i) => {
        if (newLabels[i]) txt.textContent = newLabels[i];
      });
      const legendItems = summary.querySelectorAll('.metric small');
      legendItems.forEach((small, i) => {
        if (newLabels[i]) small.textContent = newLabels[i];
      });
      update();
    }
  };
}

function applyYoYGrowth(scenarioKey, percent) {
  const scenario = scenarioKey === 's1' ? scenario1 : scenario2;
  const currentData = scenario.getData();
  const baseline = currentData[0].value;
  const newValues = [baseline];

  for (let i = 1; i < currentData.length; i++) {
    const prevValue = newValues[i - 1];
    newValues.push(prevValue * (1 + percent / 100));
  }

  scenario.setValues(newValues);
}

function applyProfitPreset(scenarioKey, delta) {
  const refreshFn = scenarioKey === 's1' ? refreshProfit1 : refreshProfit2;
  const baselinePct = refreshFn.rawMargins[0];

  for (let i = 1; i <= 3; i++) {
    const newValue = baselinePct + (delta * i);
    refreshFn.rawMargins[i] = newValue;
  }
  refreshFn();
}

function createProfitControls({ containerId, scenarioKey, scenarioName, defaultPercents, getScenarioData }) {
  const container = document.getElementById(containerId);
  const years = ['Baseline', String(yr1), String(yr2), String(yr3)];
  const rawMargins = [...defaultPercents];

  container.innerHTML = years.map((year, i) => `
    <div class="profit-row">
      <div class="profit-head">
        <div class="profit-label">${year} net profit as % of revenue</div>
        <div style="display: flex; align-items: center; gap: 2px;">
          <input type="number" class="profit-percent-input" id="${containerId}-percent-input-${i}" value="${defaultPercents[i]}" step="0.01" style="width: 65px; text-align: right; border: 1px solid var(--border); border-radius: 6px; padding: 4px; font-size: 0.95rem; font-weight: 700; color: var(--accent); font-family: inherit;" ${i === 0 ? 'readonly style="background: #fafaf9; border-color: transparent;"' : ''}>
          <span class="profit-percent">%</span>
        </div>
      </div>
      ${i === 0 ? '' : `<input class="profit-slider" id="${containerId}-slider-${i}" type="range" min="-100" max="80" step="1" value="${defaultPercents[i]}" aria-label="${scenarioName} ${year} net profit percentage">`}
      <div class="profit-number">
        <span style="margin-right: 4px;">Net profit value:</span>
        ${i === 0 ? `
          <div style="display: inline-flex; align-items: center; gap: 2px; vertical-align: middle;">
            <span style="color: var(--text);">£</span>
            <input type="number" id="${containerId}-amount-input-${i}" style="width: 70px; text-align: right; border: 1px solid var(--border); border-radius: 6px; padding: 2px 4px; font-size: 0.92rem; font-family: inherit;">
            <span style="color: var(--text);">k</span>
          </div>
        ` : `<span id="${containerId}-value-${i}" style="color: var(--text);"></span>`}
      </div>
    </div>
  `).join('');

  function refresh(sourceId) {
    const data = getScenarioData();
    years.forEach((year, i) => {
      const slider = document.getElementById(`${containerId}-slider-${i}`);
      const percentInput = document.getElementById(`${containerId}-percent-input-${i}`);
      const valueSpan = document.getElementById(`${containerId}-value-${i}`);
      const amountInput = document.getElementById(`${containerId}-amount-input-${i}`);
      const revenue = data[i].value;

      let pct;
      let profitK;

      if (amountInput && sourceId === amountInput.id) {
        profitK = Number(amountInput.value);
        pct = revenue ? (profitK / revenue) * 100 : 0;
        pct = Math.round(pct * 100) / 100;
        rawMargins[i] = pct;
      } else if (slider && sourceId === slider.id) {
        pct = Number(slider.value);
        rawMargins[i] = pct;
      } else if (percentInput && sourceId === percentInput.id) {
        pct = Number(percentInput.value);
        rawMargins[i] = pct;
      } else {
        pct = rawMargins[i];
      }

      profitK = revenue * (pct / 100);

      let addedSalaryCost = 0;
      if (i > 0) {
        addedSalaryCost = (employeeCostK[scenarioKey][i] || 0) - (employeeCostK[scenarioKey][0] || 0);
        profitK -= addedSalaryCost;
      }

      const adjustedPct = revenue ? (profitK / revenue) * 100 : 0;
      const roundedAdjustedPct = Math.round(adjustedPct * 100) / 100;

      if (percentInput && sourceId !== percentInput.id) {
        percentInput.value = roundedAdjustedPct;
      }
      if (slider && sourceId !== slider.id) {
        slider.value = Math.round(adjustedPct);
      }
      if (amountInput && sourceId !== amountInput.id) {
        amountInput.value = Number(profitK.toFixed(2));
      }

      if (valueSpan) {
        if (i > 0 && addedSalaryCost > 0) {
          valueSpan.innerHTML = `${formatCurrencyK(profitK)} <span style="font-size: 0.8rem; color: #d9534f; font-weight: 600; margin-left: 6px;">(-${formatCurrencyK(addedSalaryCost)} payroll adjustment)</span>`;
        } else {
          valueSpan.textContent = formatCurrencyK(profitK);
        }
      }
      netProfitK[scenarioKey][i] = profitK;
    });
    updateSummaryTable();
  }

  refresh.rawMargins = rawMargins;

  years.forEach((_, i) => {
    const slider = document.getElementById(`${containerId}-slider-${i}`);
    if (slider) {
      slider.addEventListener('input', (e) => refresh(e.target.id));
    }
    const pctInput = document.getElementById(`${containerId}-percent-input-${i}`);
    if (pctInput) {
      pctInput.addEventListener('input', (e) => refresh(e.target.id));
    }
    const amountInput = document.getElementById(`${containerId}-amount-input-${i}`);
    if (amountInput) {
      amountInput.addEventListener('input', (e) => refresh(e.target.id));
    }
  });

  refresh();
  return refresh;
}

function createEmployeeLogic(prefix, scenarioKey) {
  const baselineInput = document.getElementById(`${prefix}-baseline`);
  const costInput = document.getElementById(`${prefix}-cost`);
  const y1Input = document.getElementById(`${prefix}-y1`);
  const y2Input = document.getElementById(`${prefix}-y2`);
  const y3Input = document.getElementById(`${prefix}-y3`);
  const metric = document.getElementById(`${prefix}-metric`);

  function update() {
    const costPerEmployee = Math.max(0, Number(costInput.value / baselineInput.value) || 0);
    const counts = [
      Math.max(0, Number(baselineInput.value) || 0),
      Math.max(0, Number(y1Input.value) || 0),
      Math.max(0, Number(y2Input.value) || 0),
      Math.max(0, Number(y3Input.value) || 0)
    ];
    const annualCosts = counts.map(c => c * costPerEmployee);

    metric.innerHTML = `Average cost per employee: <strong>${formatCurrencyK(costPerEmployee)}</strong><br>` +
      `Annual employee cost: Base ${formatCurrencyK(annualCosts[0])}, ${yr1} ${formatCurrencyK(annualCosts[1])}, ${yr2} ${formatCurrencyK(annualCosts[2])}, ${yr3} ${formatCurrencyK(annualCosts[3])}`;

    employeeCostK[scenarioKey] = annualCosts;
    const refreshProfit = scenarioKey === 's1' ? refreshProfit1 : refreshProfit2;
    if (typeof refreshProfit === 'function') {
      refreshProfit();
    } else {
      updateSummaryTable();
    }
  }

  [baselineInput, costInput, y1Input, y2Input, y3Input].forEach(input => {
    input.addEventListener('input', update);
  });
  update();
  return update;
}

// Scenario 2 Custom Employment Logic
const BAND_SALARIES = [15, 20.4, 30, 40, 50, 65]; // £k

function updateEmployee2() {
  const baselineInput = document.getElementById('emp2-baseline');
  const costInput = document.getElementById('emp2-cost');
  const metric = document.getElementById('emp2-metric');

  const baselineCount = Math.max(0, Number(baselineInput.value) || 0);
  const baselineCost = Math.max(0, Number(costInput.value) || 0);
  const baselineAvgSalary = baselineCount ? (baselineCost / baselineCount) : 0;

  const newJobsByYear = [0, 0, 0]; // Y1, Y2, Y3 indices
  const costAddedByYear = [0, 0, 0];
  const bandTotals = [0, 0, 0, 0, 0, 0];

  const bandInputs = document.querySelectorAll('.band-input');
  bandInputs.forEach(input => {
    const bandIdx = parseInt(input.dataset.band);
    const yearIdx = parseInt(input.dataset.yearIdx);
    const val = Math.max(0, parseInt(input.value) || 0);

    newJobsByYear[yearIdx - 1] += val;
    costAddedByYear[yearIdx - 1] += val * BAND_SALARIES[bandIdx];
    bandTotals[bandIdx] += val;
  });

  for (let i = 0; i < 6; i++) {
    document.getElementById(`band-total-${i}`).textContent = bandTotals[i];
  }

  let grandTotalNewJobs = 0;
  let cumulativeNewJobs = 0;
  for (let idx = 1; idx <= 3; idx++) {
    const colTotal = newJobsByYear[idx - 1];
    cumulativeNewJobs += colTotal;
    document.getElementById(`band-col-total-y${idx}`).textContent = colTotal;
    document.getElementById(`forecast-new-y${idx}`).textContent = colTotal;
    grandTotalNewJobs += colTotal;

    const c1Input = document.getElementById(`emp1-y${idx}`);
    const c2Input = document.getElementById(`emp2-y${idx}`);
    if (c1Input && c2Input) {
      const c1 = Math.max(0, parseInt(c1Input.value) || 0);
      c2Input.value = c1 + cumulativeNewJobs;
    }
  }
  document.getElementById('band-grand-total').textContent = grandTotalNewJobs;
  document.getElementById('forecast-new-total').textContent = grandTotalNewJobs;

  let grandTotalUpskilled = 0;
  for (let idx = 1; idx <= 3; idx++) {
    const val = Math.max(0, parseInt(document.getElementById(`upskilled-y${idx}`).value) || 0);
    grandTotalUpskilled += val;
  }
  document.getElementById('upskilled-total').textContent = grandTotalUpskilled;

  const counts = [baselineCount];
  const costs = [baselineCost];

  counts.push(counts[0] + newJobsByYear[0]);
  costs.push(costs[0] + costAddedByYear[0]);

  counts.push(counts[1] + newJobsByYear[1]);
  costs.push(costs[1] + costAddedByYear[1]);

  counts.push(counts[2] + newJobsByYear[2]);
  costs.push(costs[2] + costAddedByYear[2]);

  metric.innerHTML = `Baseline Avg Salary: <strong>${formatCurrencyK(baselineAvgSalary)}</strong><br>` +
    `Headcount: Base <strong>${counts[0]}</strong>, ${yr1} <strong>${counts[1]}</strong>, ${yr2} <strong>${counts[2]}</strong>, ${yr3} <strong>${counts[3]}</strong><br>` +
    `Payroll Cost: Base <strong>${formatCurrencyK(costs[0])}</strong>, ${yr1} <strong>${formatCurrencyK(costs[1])}</strong>, ${yr2} <strong>${formatCurrencyK(costs[2])}</strong>, ${yr3} <strong>${formatCurrencyK(costs[3])}</strong>`;

  employeeCostK.s2 = costs;
  if (typeof refreshProfit2 === 'function') {
    refreshProfit2();
  } else {
    updateSummaryTable();
  }
}

// Set initial baseline callbacks
function syncChartScales(baseline) {
  if (!scenario1 || !scenario2) return;
  const min = Math.max(0, baseline * 0.6);
  const max = baseline * 1.8;
  scenario1.setYRange(min, max);
  scenario2.setYRange(min, max);
}

function syncProfitBaseline() {
  const s1Pct = refreshProfit1.rawMargins[0];
  if (refreshProfit2.rawMargins[0] !== s1Pct) {
    refreshProfit2.rawMargins[0] = s1Pct;
    refreshProfit2();
  }
}

function syncEmpBaseline(e, targetId) {
  const target = document.getElementById(targetId);
  if (target.value !== e.target.value) {
    target.value = e.target.value;
    target.dispatchEvent(new Event('input'));
  }
}

function syncCountToBands(yearIdx) {
  const c1Input = document.getElementById(`emp1-y${yearIdx}`);
  const c2Input = document.getElementById(`emp2-y${yearIdx}`);
  if (!c1Input || !c2Input) return;

  const c1 = Math.max(0, parseInt(c1Input.value) || 0);
  const c2 = Math.max(0, parseInt(c2Input.value) || 0);
  const targetDiff = Math.max(0, c2 - c1);

  let prevNewJobs = 0;
  for (let i = 1; i < yearIdx; i++) {
    const prevInputs = document.querySelectorAll(`.band-input[data-year-idx="${i}"]`);
    prevInputs.forEach(input => {
      prevNewJobs += Math.max(0, parseInt(input.value) || 0);
    });
  }

  const targetNewJobsThisYear = Math.max(0, targetDiff - prevNewJobs);
  const inputs = Array.from(document.querySelectorAll(`.band-input[data-year-idx="${yearIdx}"]`));
  const currentSum = inputs.reduce((sum, input) => sum + (parseInt(input.value) || 0), 0);

  const diff = targetNewJobsThisYear - currentSum;
  if (diff === 0) return;

  if (diff > 0) {
    const band2Input = inputs.find(input => input.dataset.band === "2");
    if (band2Input) {
      band2Input.value = (parseInt(band2Input.value) || 0) + diff;
    }
  } else {
    let toSubtract = Math.abs(diff);
    const band2Input = inputs.find(input => input.dataset.band === "2");
    if (band2Input) {
      const val = parseInt(band2Input.value) || 0;
      const sub = Math.min(val, toSubtract);
      band2Input.value = val - sub;
      toSubtract -= sub;
    }
    if (toSubtract > 0) {
      for (const input of inputs) {
        if (input.dataset.band === "2") continue;
        const val = parseInt(input.value) || 0;
        const sub = Math.min(val, toSubtract);
        input.value = val - sub;
        toSubtract -= sub;
        if (toSubtract === 0) break;
      }
    }
  }
  updateEmployee2();
}

// Standalone Modal Functions
function showBaselineModal() {
  document.getElementById('modal-revenue').value = Math.round(scenario1.getData()[0].value);
  const s1AmtInput = document.getElementById('profitGrid1-amount-input-0');
  document.getElementById('modal-profit').value = s1AmtInput ? Math.round(Number(s1AmtInput.value)) : 45;
  document.getElementById('modal-emp-count').value = document.getElementById('emp1-baseline').value;
  document.getElementById('modal-emp-cost').value = document.getElementById('emp1-cost').value;
  document.getElementById('baselineModal').classList.add('active');
}

function hideBaselineModal() {
  document.getElementById('baselineModal').classList.remove('active');
}

function handleApplyBaseline() {
  const rev = Number(document.getElementById('modal-revenue').value);
  const profitVal = Number(document.getElementById('modal-profit').value);
  const count = Number(document.getElementById('modal-emp-count').value);
  const cost = Number(document.getElementById('modal-emp-cost').value);

  scenario1.setDataValue(0, rev);

  const emp1Base = document.getElementById('emp1-baseline');
  const emp1Cost = document.getElementById('emp1-cost');
  emp1Base.value = count;
  emp1Cost.value = cost;

  document.getElementById('emp1-y1').value = count;
  document.getElementById('emp1-y2').value = count;
  document.getElementById('emp1-y3').value = count;

  emp1Base.dispatchEvent(new Event('input'));
  emp1Cost.dispatchEvent(new Event('input'));

  const bandInputs = document.querySelectorAll('.band-input');
  bandInputs.forEach(input => {
    input.value = 0;
  });
  updateEmployee2();

  const basePct = rev ? Math.round((profitVal / rev) * 100 * 100) / 100 : 10;

  for (let i = 0; i < 4; i++) {
    refreshProfit1.rawMargins[i] = basePct;
  }
  for (let i = 0; i < 4; i++) {
    refreshProfit2.rawMargins[i] = basePct;
  }

  refreshProfit1();
  refreshProfit2();

  hideBaselineModal();
  sessionStorage.setItem('gva_baseline_initialized', 'true');
}

function handleSkipBaseline() {
  hideBaselineModal();
  sessionStorage.setItem('gva_baseline_initialized', 'true');
}

// Standalone CSV Operations
function handleExport() {
  const csv = [];

  function serializeTable(tableId, title) {
    const table = document.getElementById(tableId);
    if (!table) return;
    csv.push(`"${title}"`);
    const rows = table.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
      const row = [];
      const cols = rows[i].querySelectorAll('td, th');
      for (let j = 0; j < cols.length; j++) {
        const cell = cols[j];
        let cellText = '';
        const numInput = cell.querySelector('input[type="number"]');
        const txtInput = cell.querySelector('input[type="text"]');
        if (numInput) {
          if (tableId === 'summaryTable' && cellText.includes('cost')) {
            cellText = '£' + numInput.value + 'k';
          } else {
            cellText = numInput.value;
          }
        } else if (txtInput) {
          cellText = txtInput.value;
        } else {
          cellText = cell.innerText.replace(/(\r\n|\n|\r)/gm, ' ').trim();
        }
        cellText = '"' + cellText.replace(/"/g, '""') + '"';
        row.push(cellText);
      }
      csv.push(row.join(','));
    }
    csv.push('');
  }

  serializeTable('summaryTable', 'Summary Metrics');

  const s2ForecastTable = document.querySelector('.forecast-table');
  if (s2ForecastTable) {
    csv.push('"Scenario 2 Employment & Skills Forecast"');
    const rows = s2ForecastTable.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
      const row = [];
      const cols = rows[i].querySelectorAll('td, th');
      for (let j = 0; j < cols.length; j++) {
        const cell = cols[j];
        let cellText = '';
        const numInput = cell.querySelector('input[type="number"]');
        const txtInput = cell.querySelector('input[type="text"]');
        if (numInput) {
          cellText = numInput.value;
        } else if (txtInput) {
          cellText = txtInput.value;
        } else {
          cellText = cell.innerText.replace(/(\r\n|\n|\r)/gm, ' ').trim();
        }
        cellText = '"' + cellText.replace(/"/g, '""') + '"';
        row.push(cellText);
      }
      csv.push(row.join(','));
    }
    csv.push('');
  }

  const s2BandsTable = document.querySelector('.bands-table');
  if (s2BandsTable) {
    csv.push('"Scenario 2 Salary Bands of New Jobs Created"');
    const rows = s2BandsTable.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
      const row = [];
      const cols = rows[i].querySelectorAll('td, th');
      for (let j = 0; j < cols.length; j++) {
        const cell = cols[j];
        let cellText = '';
        const numInput = cell.querySelector('input[type="number"]');
        if (numInput) {
          cellText = numInput.value;
        } else {
          cellText = cell.innerText.replace(/(\r\n|\n|\r)/gm, ' ').trim();
        }
        cellText = '"' + cellText.replace(/"/g, '""') + '"';
        row.push(cellText);
      }
      csv.push(row.join(','));
    }
    csv.push('');
  }

  csv.push('"Model Inputs"');
  csv.push('"Parameter","Base","Y1","Y2","Y3"');
  csv.push(`"Base Year",${baseYear},,,`);
  
  const s1Data = scenario1.getData();
  csv.push(`"S1 Revenue",${s1Data.map(d => d.value).join(',')}`);
  
  const s2Data = scenario2.getData();
  csv.push(`"S2 Revenue",${s2Data.map(d => d.value).join(',')}`);
  
  const s1Margins = [0, 1, 2, 3].map(i => refreshProfit1.rawMargins[i]);
  csv.push(`"S1 Profit Margin %",${s1Margins.join(',')}`);
  
  const s2Margins = [0, 1, 2, 3].map(i => refreshProfit2.rawMargins[i]);
  csv.push(`"S2 Profit Margin %",${s2Margins.join(',')}`);
  
  const s1Emp = [
    document.getElementById('emp1-baseline').value,
    document.getElementById('emp1-y1').value,
    document.getElementById('emp1-y2').value,
    document.getElementById('emp1-y3').value
  ];
  csv.push(`"S1 Employee Count",${s1Emp.join(',')}`);
  
  const s1EmpCost = document.getElementById('emp1-cost').value;
  csv.push(`"Baseline Employee Cost",${s1EmpCost},,,`);
  
  const projCost = document.getElementById('project-cost-input').value;
  csv.push(`"Project Cost",${projCost},,,`);
  
  const s2Upskilled = [1, 2, 3].map(i => document.getElementById(`upskilled-y${i}`).value);
  csv.push(`"S2 Upskilled Count",${s2Upskilled.join(',')},`);
  
  const s2SkillsNotes = [1, 2, 3].map(i => '"' + document.getElementById(`skills-note-y${i}`).value.replace(/"/g, '""') + '"');
  csv.push(`"S2 Skills Notes",${s2SkillsNotes.join(',')},`);
  
  for (let b = 0; b < 6; b++) {
    const bandVals = [1, 2, 3].map(yrIdx => {
      const input = document.querySelector(`.band-input[data-band="${b}"][data-year-idx="${yrIdx}"]`);
      return input ? input.value : 0;
    });
    csv.push(`"S2 Band ${b} Count",${bandVals.join(',')},`);
  }
  csv.push('');

  const csvStr = csv.join('\n');
  const blob = new Blob(['\uFEFF' + csvStr], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'GVA_Scenario_Modeler_v3_Export.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handleImportClick() {
  document.getElementById('import-file-input').click();
}

function handleImportChange(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const contents = evt.target.result;
      const rows = parseCSV(contents);
      
      let inputsStartIdx = -1;
      for (let i = 0; i < rows.length; i++) {
        if (rows[i][0] && rows[i][0].trim() === 'Model Inputs') {
          inputsStartIdx = i;
          break;
        }
      }

      if (inputsStartIdx === -1) {
        alert('Could not find "Model Inputs" in the CSV. Please import a valid GVA Scenario Modeler CSV.');
        document.getElementById('import-file-input').value = '';
        return;
      }

      const params = {};
      for (let i = inputsStartIdx + 2; i < rows.length; i++) {
        const r = rows[i];
        if (!r || r.length === 0 || r[0] === '') break;
        const key = r[0].trim();
        const vals = r.slice(1);
        params[key] = vals;
      }

      const requiredKeys = [
        'Base Year', 'S1 Revenue', 'S2 Revenue', 
        'S1 Profit Margin %', 'S2 Profit Margin %', 
        'S1 Employee Count', 'Baseline Employee Cost', 'Project Cost', 
        'S2 Upskilled Count', 'S2 Skills Notes'
      ];
      for (const key of requiredKeys) {
        if (!params[key]) {
          alert(`Missing required parameter "${key}" in the CSV.`);
          document.getElementById('import-file-input').value = '';
          return;
        }
      }

      const importedBaseYear = parseInt(params['Base Year'][0]);
      if (!isNaN(importedBaseYear)) {
        updateBaseYear(importedBaseYear);
      }

      const s1Revs = params['S1 Revenue'].slice(0, 4).map(Number);
      const s2Revs = params['S2 Revenue'].slice(0, 4).map(Number);
      scenario1.setValues(s1Revs);
      scenario2.setValues(s2Revs);
      syncChartScales(s1Revs[0]);

      const s1Emps = params['S1 Employee Count'].slice(0, 4).map(Number);
      document.getElementById('emp1-baseline').value = s1Emps[0];
      document.getElementById('emp1-y1').value = s1Emps[1];
      document.getElementById('emp1-y2').value = s1Emps[2];
      document.getElementById('emp1-y3').value = s1Emps[3];

      document.getElementById('emp1-cost').value = Number(params['Baseline Employee Cost'][0]);

      document.getElementById('emp1-baseline').dispatchEvent(new Event('input'));
      document.getElementById('emp1-cost').dispatchEvent(new Event('input'));

      const upskilled = params['S2 Upskilled Count'].slice(0, 3).map(Number);
      document.getElementById('upskilled-y1').value = upskilled[0];
      document.getElementById('upskilled-y2').value = upskilled[1];
      document.getElementById('upskilled-y3').value = upskilled[2];

      const skillsNotes = params['S2 Skills Notes'].slice(0, 3);
      document.getElementById('skills-note-y1').value = skillsNotes[0] || '';
      document.getElementById('skills-note-y2').value = skillsNotes[1] || '';
      document.getElementById('skills-note-y3').value = skillsNotes[2] || '';

      for (let b = 0; b < 6; b++) {
        const key = `S2 Band ${b} Count`;
        if (params[key]) {
          const vals = params[key].slice(0, 3).map(Number);
          for (let yr = 1; yr <= 3; yr++) {
            const input = document.querySelector(`.band-input[data-band="${b}"][data-year-idx="${yr}"]`);
            if (input) {
              input.value = vals[yr - 1] || 0;
            }
          }
        }
      }

      updateEmployee2();

      const s1Margins = params['S1 Profit Margin %'].slice(0, 4).map(Number);
      const s2Margins = params['S2 Profit Margin %'].slice(0, 4).map(Number);
      for (let i = 0; i < 4; i++) {
        refreshProfit1.rawMargins[i] = s1Margins[i];
        refreshProfit2.rawMargins[i] = s2Margins[i];
      }

      refreshProfit1();
      refreshProfit2();

      const projectCost = Number(params['Project Cost'][0]);
      document.getElementById('project-cost-input').value = projectCost;

      updateSummaryTable();
      alert('Import completed successfully!');
    } catch (err) {
      console.error(err);
      alert('An error occurred while parsing the CSV: ' + err.message);
    }
    document.getElementById('import-file-input').value = '';
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i+1];
    
    if (inQuotes) {
      if (c === '"') {
        if (next === '"') {
          row[row.length - 1] += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        row[row.length - 1] += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ',') {
        row.push("");
      } else if (c === '\r' || c === '\n') {
        if (c === '\r' && next === '\n') {
          i++;
        }
        lines.push(row);
        row = [""];
      } else {
        row[row.length - 1] += c;
      }
    }
  }
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }
  return lines;
}

// Deferred Dashboard Initialization function
function initializeDashboard() {
  initializeDynamicHeaders();

  scenario1 = createScenarioChart({
    svgId: 'chart1',
    summaryId: 'summary1',
    title: 'Scenario 1',
    series: [
      { label: labels[0], value: 450 },
      { label: labels[1], value: 580 },
      { label: labels[2], value: 430 },
      { label: labels[3], value: 490 }
    ],
    onUpdate: (data) => {
      if (scenario2) {
        const currentS2Data = scenario2.getData();
        if (currentS2Data[0].value !== data[0].value) {
          scenario2.setDataValue(0, data[0].value);
          syncChartScales(data[0].value);
        }
      }
      refreshProfit1();
    }
  });

  scenario2 = createScenarioChart({
    svgId: 'chart2',
    summaryId: 'summary2',
    title: 'Scenario 2',
    series: [
      { label: labels[0], value: 450 },
      { label: labels[1], value: 460 },
      { label: labels[2], value: 600 },
      { label: labels[3], value: 500 }
    ],
    onUpdate: (data) => {
      if (scenario1) {
        const currentS1Data = scenario1.getData();
        if (currentS1Data[0].value !== data[0].value) {
          scenario1.setDataValue(0, data[0].value);
          syncChartScales(data[0].value);
        }
      }
      refreshProfit2();
    }
  });

  refreshProfit1 = createProfitControls({
    containerId: 'profitGrid1',
    scenarioKey: 's1',
    scenarioName: 'Scenario 1',
    defaultPercents: [10, 15, 20, 22],
    getScenarioData: scenario1.getData
  });

  refreshProfit2 = createProfitControls({
    containerId: 'profitGrid2',
    scenarioKey: 's2',
    scenarioName: 'Scenario 2',
    defaultPercents: [10, 16, 24, 28],
    getScenarioData: scenario2.getData
  });

  createEmployeeLogic('emp1', 's1');

  document.querySelectorAll('.band-input').forEach(input => {
    input.addEventListener('input', updateEmployee2);
  });
  ['1', '2', '3'].forEach(idx => {
    document.getElementById(`upskilled-y${idx}`).addEventListener('input', updateEmployee2);
    document.getElementById(`emp1-y${idx}`).addEventListener('input', () => syncCountToBands(idx));
    document.getElementById(`emp2-y${idx}`).addEventListener('input', () => syncCountToBands(idx));
  });
  document.getElementById('emp2-baseline').addEventListener('input', updateEmployee2);
  document.getElementById('emp2-cost').addEventListener('input', updateEmployee2);

  updateEmployee2();

  document.getElementById('profitGrid1-percent-input-0').addEventListener('input', syncProfitBaseline);
  const amt1 = document.getElementById('profitGrid1-amount-input-0');
  if (amt1) {
    amt1.addEventListener('input', () => {
      setTimeout(syncProfitBaseline, 0);
    });
  }

  document.getElementById('emp1-baseline').addEventListener('input', (e) => syncEmpBaseline(e, 'emp2-baseline'));
  document.getElementById('emp1-cost').addEventListener('input', (e) => syncEmpBaseline(e, 'emp2-cost'));

  const pcInput = document.getElementById('project-cost-input');
  if (pcInput) pcInput.addEventListener('input', updateSummaryTable);

  // Bind Export/Import
  document.getElementById('export-btn').addEventListener('click', handleExport);
  document.getElementById('import-btn').addEventListener('click', handleImportClick);
  document.getElementById('import-file-input').addEventListener('change', handleImportChange);

  // Bind Modal
  document.getElementById('modal-apply-btn').addEventListener('click', handleApplyBaseline);
  document.getElementById('modal-skip-btn').addEventListener('click', handleSkipBaseline);
  document.getElementById('edit-baseline-btn').addEventListener('click', showBaselineModal);

  scenario1.refresh();
  scenario2.refresh();
  syncChartScales(450);
  updateSummaryTable();

  const baselineInitialized = sessionStorage.getItem('gva_baseline_initialized') === 'true';
  if (!baselineInitialized) {
    setTimeout(showBaselineModal, 300);
  }
}

// Initialize Authentication Check
checkAuth();
